<template>
	<div class="components_find_menu__wrapper">
		<div class="compose-inputs">
			<div class="input">
				<v-text-field @input="refresh" v-model="name" label="Name" />
			</div>
			<div class="input">
				<v-select v-on:change="refresh" v-model="status" label="Status" :items="statusChoices" />
			</div>
			<div class="input">
				<v-select v-on:change="refresh" v-model="gender" label="Gender" :items="genderChoices" />
			</div>
		</div>
		<div class="force-center">
			<div style="display: inline-block;" @click="clear" class="clear" v-if="name || gender || status"><v-btn>Сбросить фильтры</v-btn></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {return {
		name: '',
		gender: '',
		status: '',

		genderChoices: [
			'Female',
			'Male',
			'Genderless',
			'Unknown',
		],

		statusChoices: [
			'Alive',
			'Dead',
			'Unknown'
		],
	}},
	methods: {
		refresh() {
			this.$store.dispatch('loadWithFilters', { name: this.name, gender: this.gender, status: this.status });
		},
		clear() {
			this.name = '';
			this.gender = '';
			this.status = '';
			this.$store.dispatch('init', {type: 'hard'});
			this.$store.dispatch('resetFilters');
		}
	},
}
</script>

<style lang="scss">
	.components_find_menu__wrapper {
		padding: 10px;
		min-height: 75px;
		background: #1f1f1f;
		z-index: 101;
		.compose-inputs {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.input {
				margin-right: 20px;
				margin-left: 20px;
			}
		}
	}
</style>
