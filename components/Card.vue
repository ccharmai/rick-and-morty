<template>
	<div class="components_card__wrapper" :class="{ 'empty-card': pers == null }">
		<v-card width="250" >
			<v-img class="white--text align-end img" :src="pers.img" />
			<v-card-text class="text--primary">
				<v-row>
					<v-col class="col-8">
						<div class="pers-name">{{ pers.name }}</div>
						<div class="pers-type">{{ pers.type }}</div>
					</v-col>
					<v-col class="col-4 alive-status">
						<div class="indicator" :class="{'green': pers.alive == 'yes', 'red': pers.alive == 'no', 'grey': pers.alive == 'na'}"></div>
						<div class="status">{{ live_status }}</div>
					</v-col>
				</v-row>
    		</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		pers: { type: Object, default: null, },
	},
	computed: {
		live_status() {
			if (this.pers.alive == 'yes') return 'Alive';
			if (this.pers.alive == 'no') return 'Dead';
			if (this.pers.alive == 'na') return 'N/A';
		}
	},
}
</script>

<style lang="scss">
	.components_card__wrapper {
		display: inline-block;
		margin: 20px;
		.img img, .v-image {
			width: 250px;
			height: 250px;
		}
		.pers-name {
			font-size: 110%;
			font-weight: bold;
		}
		.pers-type {
			font-size: 90%;
			color: grey;
		}
		.alive-status {
			display: flex;
			align-items: center;
			.indicator {
				width: 10px !important;
				height: 10px !important;
				border-radius: 5px;
				margin-right: 10px;
				&.green {
					background: green;
					box-shadow: 0px 0px 4px 2px green;
				}
				&.red {
					background: red;
					box-shadow: 0px 0px 4px 2px red;
				}
				&.grey {
					background: grey;
					box-shadow: 0px 0px 4px 2px grey;
				}
			}
		}
	}
</style>
