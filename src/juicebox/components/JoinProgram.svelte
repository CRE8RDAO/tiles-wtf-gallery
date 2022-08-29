<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type Store from '$utils/Store';
	import Icon from './Icon.svelte';
	import InfoSpaceBetween from './InfoSpaceBetween.svelte';
	import type { V2ProjectContextType } from '$juicebox/models/project-type';

	const project = getContext('PROJECT') as Store<V2ProjectContextType>;

	export let loading: boolean = false;
</script>

<section>
	<header>
		<InfoSpaceBetween>
			<h4 slot="left">Join Amplifi Referral Program</h4>
			<div slot="right">
				<a
					href="https://amplifi.cre8r.vip/#/campaigns/amplifi/amplifi-juicebox"
					target="_blank"
					rel="noreferrer noopenerrer"
				>
					Become an Amplifi affiliate
				</a>
			</div>
		</InfoSpaceBetween>
	</header>
	{#if loading}
		<div class="loading">
			<Icon name="loading" spin />
		</div>
	{:else}
		<div class="row">
			<div class="incentivesWrapper">
				<h5>For every referral you will get</h5>
				<div class="row alignCenter">
					<div class="infoContainer">
						<Icon name="ethereum" />
						<div>5% in ETH</div>
					</div>
					<div>AND</div>
					<div class="infoContainer">
						<Icon name="amplifi" />
						<div>matching $AMP</div>
					</div>
				</div>
			</div>
			<div class="kpisWrapper">
				<h5>Referral is generated when user</h5>
				<div class="row alignCenter">
					<div class="infoContainer">
						<div>deposits ETH to Juicebox</div>
					</div>
					<div>AND</div>
					<div class="infoContainer">
						<div>payouts happen monthly</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	section {
		flex: 0 0 50%;
		width: 100%;
		padding-left: 20px;
		padding-right: 20px;
		margin: 0 auto;
		margin-top: 40px;
	}

	a {
		font-size: 14px;
		text-decoration: none;
		border-bottom: 3px solid #ff3700;
		transition: border-bottom 0.3s ease-in-out;
	}

	a:hover {
		border-bottom: 3px solid black;
	}

	header {
		margin-bottom: 20px;
	}

	h4 {
		font-weight: 600;
		color: var(--text-header);
	}

	div[slot='right'] {
		width: 230px;
		font-weight: 300;
		display: flex;
		align-items: flex-end;
	}

	.row {
		display: flex;
		gap: 12px;
	}

	.alignCenter {
		align-items: center;
	}

	.incentivesWrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 9px;
		padding: 15px 20px;
		border: 2px solid #959595;
		width: fit-content;
	}

	.kpisWrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 9px;
		padding: 15px 20px;
		border: 2px solid #959595;
		width: 100%;
	}

	.infoContainer {
		background-color: #ff3700;
		color: #fff;
		display: flex;
		gap: 7px;
		align-items: center;
		padding: 7px 12px;
		white-space: nowrap;
	}

	.loading {
		color: var(--text-header);
		margin-top: 50px;
		text-align: center;
		transform: scale(1.5);
		width: 100%;
	}

	@media (max-width: 768px) {
		section {
			flex: 0 0 100%;
		}
	}
</style>
