import axios from 'axios';

export const state = () => ({
	characters: [],
	page: 0,
	maxPage: 0,
	loadingCharacters: true,
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
}

export const actions = {
	init({commit, getters}, payload) {
		this.dispatch('addEmptyCards');
		axios.get(`${getters.api}/`)
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
						img: i.image
					});
				}
				console.log(outputMass)
				commit('setCharacters', outputMass);
				commit('setLoadingCharacters', false);
				this.dispatch('deleteEmptyCards');
			})
	},
	loadMore({commit, getters}, payload) {
		let currPage = getters.getPage;
		let maxPage = getters.getMaxPage;
		if (currPage + 1 > maxPage) return;
		this.dispatch('addEmptyCards');
		commit('setLoadingCharacters', true);
		axios.get(`${getters.api}/?page=${currPage + 1}`)
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
					});
				}
				commit('setCharacters', outputMass);
				commit('setPage', currPage + 1);
				commit('setLoadingCharacters', false);
				this.dispatch('deleteEmptyCards');
			})
	},
	addEmptyCards({commit, getters}, payload) {
		let copyMass = getters.getCharacters;
		let outputMass = []
		for (let i of copyMass) {outputMass.push(i)}
		for (let i = 0; i < 20; i++) {
			outputMass.push({
				name: '',
				alive: '',
				type: '',
				img: '',
				empty: true,
			});
		}
		commit('setCharacters', outputMass);
	},
	deleteEmptyCards({commit, getters}, payload) {
		let copyMass = getters.getCharacters;
		let outputMass = [];
		for (let i of copyMass) {if (!i.empty) outputMass.push(i)}
		commit('setCharacters', outputMass);
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
}
