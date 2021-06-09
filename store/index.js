import axios from 'axios';

export const state = () => ({
	characters: [],
})

export const mutations = {
	setCharacters(state, characters) {
		state.characters = characters;
	},
}

export const actions = {
	setExampleCharacters({commit}, payload) {
		let oneCharacter = { name: 'Rick Sanchez', type: 'Human', alive: 'yes', img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' };
		let outputMass = [];
		for (let i = 0; i < 10; i++) { outputMass.push(oneCharacter) }
		commit('setCharacters', outputMass);
	},
}

export const getters = {
	getCharacters(state) {
		return state.characters;
	}
}
