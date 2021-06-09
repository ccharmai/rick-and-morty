import axios from 'axios';

export const state = () => ({
	characters: [],
	page: 0,
	maxPage: 0,
	loadingCharacters: true,
	filters: {
		name: '',
		gender: '',
		status: ''
	},
	parametersQuery: '',
})

export const mutations = {
	setCharacters(state, characters) {
		state.characters = characters;
	},
	setLoadingCharacters(state, status) {
		state.loadingCharacters = status;
	},
	setPage(state, page) {
		state.page = page;
	},
	setMaxPage(state, maxPage) {
		state.maxPage = maxPage;
	},
	setFilters(state, payload) {
		state.filters.name = payload.name;
		state.filters.gender = payload.gender;
		state.filters.status = payload.status;
	},
}

export const actions = {
	init({commit, getters}, payload) {
		if (payload.type == 'hard') commit('setCharacters', []);
		payload.type = 'soft';
		this.dispatch('addEmptyCards');
		let apiUrl = '/';
		let countParams = 0;
		let filters = getters.getFilters;
		if (filters.name) {
			if (countParams == 0) apiUrl += `?name=${filters.name}`
			else apiUrl += `&name=${filters.name}`
			countParams++;
		}
		if (filters.gender) {
			if (countParams == 0) apiUrl += `?gender=${filters.gender}`
			else apiUrl += `&gender=${filters.gender}`
			countParams++;
		}
		if (filters.status) {
			if (countParams == 0) apiUrl += `?status=${filters.status}`
			else apiUrl += `&status=${filters.status}`
			countParams++;
		}
		console.log(apiUrl);
		axios.get(`${getters.api}${apiUrl}`)
			.then(res => {
				commit('setMaxPage', res.data.info.pages);
				commit('setPage', 1);
				let copyMass = getters.getCharacters;
				let outputMass = []
				for (let i of copyMass) {outputMass.push(i)}
				for (let i of res.data.results) {
					outputMass.push({
						id: i.id,
						name: i.name,
						alive: i.status,
						type: i.species,
						img: i.image,
						gender: i.gender,
					});
				}
				commit('setCharacters', outputMass);
				this.dispatch('deleteEmptyCards');
			})
			.catch(err => {
				this.dispatch('deleteEmptyCards');
			})
	},
	loadMore({commit, getters}, payload) {
		let currPage = getters.getPage;
		let maxPage = getters.getMaxPage;
		if (currPage + 1 > maxPage) return;
		this.dispatch('addEmptyCards');
		commit('setLoadingCharacters', true);
		let apiUrl = `/?page=${currPage + 1}`;
		let filters = getters.getFilters;
		if (filters.name)
			apiUrl += `&name=${filters.name}`
		if (filters.gender)
			apiUrl += `&gender=${filters.gender}`
		if (filters.status)
			apiUrl += `&status=${filters.status}`
		axios.get(`${getters.api}${apiUrl}`)
			.then(res => {
				let copyMass = getters.getCharacters;
				let outputMass = []
				for (let i of copyMass) {outputMass.push(i)}
				for (let i of res.data.results) {
					outputMass.push({
						name: i.name,
						alive: i.status,
						type: i.species,
						img: i.image,
						empty: false,
						gender: i.gender,
					});
				}
				commit('setCharacters', outputMass);
				commit('setPage', currPage + 1);
				commit('setLoadingCharacters', false);
				this.dispatch('deleteEmptyCards');
			})
			.catch(err => {
				commit('setLoadingCharacters', false);
				this.dispatch('deleteEmptyCards');
			})
	},
	loadWithFilters({commit, getters}, payload) {
		this.dispatch('setFilters', payload);
		this.dispatch('init', {type: 'hard',});
	},
	addEmptyCards({commit, getters}, payload) {
		let copyMass = getters.getCharacters;
		let outputMass = [];
		for (let i of copyMass) {outputMass.push(i)}
		for (let i = 0; i < 20; i++) {
			outputMass.push({
				name: '',
				alive: '',
				type: '',
				img: '',
				empty: true,
				gender: '',
			});
		}
		commit('setCharacters', outputMass);
	},
	deleteEmptyCards({commit, getters}, payload) {
		let copyMass = getters.getCharacters;
		let outputMass = [];
		for (let i of copyMass) {if (!i.empty) outputMass.push(i)}
		commit('setCharacters', outputMass);
	},
	setFilters({commit}, filters) {
		commit('setFilters', filters);
	},
	resetFilters({commit}, payload) {
		commit('setFilters', {name: '', gender: '', status: ''})
	}
}

export const getters = {
	getCharacters(state) {
		return state.characters;
	},
	getLoadingCharacters(state) {
		return state.loadingCharacters;
	},
	api(state) {
		return 'https://rickandmortyapi.com/api/character';
	},
	getPage(state) {
		return state.page;
	},
	getMaxPage(state) {
		return state.maxPage;
	},
	getFilters(state) {
		return state.filters;
	},
	getParametersQuery(state) {
		return state.parametersQuery;
	}
}
