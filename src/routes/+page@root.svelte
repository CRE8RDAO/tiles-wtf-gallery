<script lang="ts">
	import { readNetwork } from '$stores/web3';
	import { browser } from '$app/env';
	import Icon from '$juicebox/components/Icon.svelte';

	let innerWidth = browser ? window.innerWidth : 0;
</script>

<svelte:window bind:innerWidth />

<main class:mobile={innerWidth < 650}>
	<section>
		<h1>
			<a class="heading" href="/dao?{$readNetwork ? `network=${$readNetwork?.alias}` : ''}">
				AmpliFi DAO Fundraise is live selling 6% to total $AMP
			</a>
		</h1>
		<p>We're building the web3 clickbank minus the dick pills.</p>
		<p>
			Our fundraise has it's own referral program using AmpliFI. You can earn $ETH + $veAMP for
			helping us spread the word.
		</p>
		<a href="https://amplifi.cre8r.vip/#/campaigns/AMPLIFI/amplifi-juicebox"
			>AmpliFi Fundraiser Referral Program</a
		>
	</section>
	<div class="socialIcons" target="_blank">
		<a href="https://twitter.com/AmpliFiDAO">
			<Icon name="twitter" />
		</a>
		<a href="https://discord.gg/KumYdmRw" target="_blank">
			<Icon name="discord" />
		</a>
		<a href="https://github.com/CRE8RDAO/amplifi-interface" target="_blank">
			<Icon name="github" style="width: 1rem" />
		</a>
	</div>
</main>

<style lang="scss">
	main {
		background: white;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
		height: calc(100vh - 85px);
		align-items: center;
		justify-items: center;
		max-width: 1000px;
		margin: 0 auto;
		text-align: center;
		h1,
		.heading {
			font-size: 20px;
			// border: 0;
		}

		a {
			font-size: 14px;
			color: black;
			text-decoration: none;
			position: relative;
			border-bottom: 3px solid #6922FF;
			margin: 0px 10px;
		}

		a:hover {
			border-bottom: 3px solid black;
		}

		p {
			font-size: 16px;
			margin: 30px 0;
		}

		.socialIcons {
			position: fixed;
			bottom: 0px;
			left: 0px;
			padding: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}
		&.mobile {
			display: flex;
			flex-direction: column;
			max-width: 100vw;
			h1,
			.heading {
				font-size: 15px;
			}
			p {
				font-size: 10px;
				margin: 16px 0;
			}
			a {
				font-size: 10px;
			}
		}
	}
</style>
