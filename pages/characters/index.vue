<template>
	<div class="page_characters__wrapper">

		<h2 class="h_title">Characters</h2>
		<TheFindMenu class="sticky" :class="{'sticky-big': !$vuetify.breakpoint.smAndDown}" />

		<v-container class="characters-container">
			<Card v-for="(character, index) in characters" :key="index" :character="character" />
		</v-container>

	</div>
</template>

<script>
import Card from "~/components/Card.vue";
import TheFindMenu from "~/components/TheFindMenu.vue";

export default {
	components: { Card, TheFindMenu, },

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
	.sticky {
		position: fixed;
		position: sticky;
		top: 56px;
		&.sticky-big {
			top: 64px;
		}
	}
	.h_title {
		margin: 15px 0;
		font-weight: bold;
		padding: 15px;
	}
</style>
