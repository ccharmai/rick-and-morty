<template>
	<div id="app">
	<v-app id="inspire">
		<v-app id="inspire">
		<v-navigation-drawer
			v-model="drawer"
			app clipped
			:temporary="$vuetify.breakpoint.smAndDown"
			:permanent="$vuetify.breakpoint.mdOnly"
		>
			<v-container class="main-container" >
				<v-list>
					<v-app-bar app clipped-left v-if="mini">
						<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
						<v-toolbar-title><b>Rick and Morty</b></v-toolbar-title>
					</v-app-bar>
					<v-list-item link to="/characters" :class="{'mt': mini}">
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
				<v-container class="social-container">
					<div class="social-item">
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-icon size="40" v-bind="attrs" v-on="on" >mdi-facebook</v-icon>
							</template>
							<span>Facebook</span>
						</v-tooltip>
					</div>
					<div class="social-item">
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-icon size="40" v-bind="attrs" v-on="on" >mdi-instagram</v-icon>
							</template>
							<span>Instagram</span>
						</v-tooltip>
					</div>
					<div class="social-item">
						<v-tooltip top>
							<template v-slot:activator="{ on, attrs }">
								<v-icon size="40" v-bind="attrs" v-on="on" >mdi-reddit</v-icon>
							</template>
							<span>Reddit</span>
						</v-tooltip>
					</div>
				</v-container>
			</v-container>
		</v-navigation-drawer>

		<v-app-bar app clipped-left >
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title><b>Rick and Morty</b></v-toolbar-title>
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
	computed: {
		mini() {
			if (!this.$vuetify.breakpoint.smAndDown) return false;
			return true;
		}
	}
}
</script>

<style>
	.nav {
		padding: 0;
	}
	.mt {
		margin-top: 60px;
	}
	.main-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		padding: 0;
	}
	.social-container {
		display: flex;
		justify-content: center;
		background: #000;
	}
	.social-container .social-item {
		margin: 15px;
	}
</style>
