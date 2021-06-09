<template>
	<div class="components_find_menu__wrapper">
		Поисковый компонент. Показано - {{ len }} персонажей
	</div>
</template>

<script>
export default {
	computed: {
		len() {
			return this.$store.getters.getCharacters.length;
		}
	}
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
