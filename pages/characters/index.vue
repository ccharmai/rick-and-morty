<template>
	<div class="page_characters__wrapper">
		<v-container class="characters-container">
			<Card v-for="i in 10" :key="i" :pers="pers" />
		</v-container>
	</div>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
	components: { Card, },
	data() {return {
		pers: {
			name: 'Rick Sanchez',
			type: 'Human',
			alive: 'na',
			img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
		}
	}},
}
</script>

<style lang="scss">
	.page_characters__wrapper {
		.characters-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
