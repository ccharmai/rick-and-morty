<template>
	<div class="components_find_menu__wrapper">
		Поисковый компонент. Показано - {{ len }} персонажей
	</div>
</template>

<script>
export default {
	computed: {
		len() {
			let pers = this.$store.getters.getCharacters;
			let length = 0;
			for (let i of pers) if (!i.empty) length++;
			return length;
		}
	},
}
</script>

<style lang="scss">
	.components_find_menu__wrapper {
		padding: 15px;
		height: 75px;
		background: #1f1f1f;
		z-index: 101;
	}
</style>
