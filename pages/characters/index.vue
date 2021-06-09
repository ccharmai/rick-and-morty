<template>
	<div class="page_characters__wrapper">
		<v-container class="characters-container">
			<Card v-for="(character, index) in characters" :key="index" :character="character" />
		</v-container>
	</div>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
	components: { Card, },
	created() {
		this.$store.dispatch('setExampleCharacters');
	},
	computed: {
		characters() {
			return this.$store.getters.getCharacters;
		}
	}
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
