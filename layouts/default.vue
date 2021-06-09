<template>
	<div id="app">
	<v-app id="inspire">
		<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app clipped >
			<v-list dense>
			<v-list-item link to="/characters">
				<v-list-item-action>
				<v-icon>mdi-account-multiple</v-icon>
				</v-list-item-action>
				<v-list-item-content>
				<v-list-item-title>Characters</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item link to="/locations">
				<v-list-item-action>
				<v-icon>mdi-map-marker-multiple</v-icon>
				</v-list-item-action>
				<v-list-item-content>
				<v-list-item-title>Locations</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item link to="/episodes">
				<v-list-item-action>
				<v-icon>mdi-filmstrip-box-multiple</v-icon>
				</v-list-item-action>
				<v-list-item-content>
				<v-list-item-title>Episodes</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app clipped-left >
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Rick and Morty</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<v-container fluid >
        		<Nuxt />
			</v-container>
		</v-main>
		</v-app>
	</v-app>
	</div>
</template>

<script>
export default {
	data() {return {
		drawer: null,
	}},
}
</script>
