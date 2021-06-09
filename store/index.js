import axios from 'axios';

export const state = () => ({
	characters: [],
	loadingCharacters: true,
})

export const mutations = {
	setCharacters(state, characters) {
		state.characters = characters;
	},
	setLoadingCharacters(state, status) {
		state.loadingCharacters = status;
	}
}

export const actions = {
	init({commit, getters}, payload) {
		axios.get(`${getters.api}/`)
			.then(res => {
				let outputMass = [];
				for (let i of res.data.results) {
					outputMass.push({
						id: i.id,
						name: i.name,
						status: i.status,
						type: i.species,
						img: i.image
					});
				}
				commit('setCharacters', outputMass);
				commit('setLoadingCharacters', false);
			})
	},
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
}
