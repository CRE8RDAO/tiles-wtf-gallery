<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type Store from '$utils/Store';
	import Icon from './Icon.svelte';
	import InfoSpaceBetween from './InfoSpaceBetween.svelte';
	import type { V2ProjectContextType } from '$juicebox/models/project-type';

	const project = getContext('PROJECT') as Store<V2ProjectContextType>;

	export let loading: boolean = false;

	interface urlParams {
		utm_content: string;
		utm_campaign: string;
		utm_source: string;
	}
	// Parameters you want to capture from the URL into the array.
	const urlParamsComing: urlParams = {
		utm_content: '',
		utm_campaign: '',
		utm_source: ''
	};

	/**
	 * Returns decoded uri component from the url parameters
	 * @param {string} name each of parameters name
	 * @returns {string} value of each parameter in url
	 */
	function getUrlParameter(name: string): string {
		let subname = new URLSearchParams(location.search).get(name);
		return subname;
	}

	//populates urlParamsComing with terms in the window location
	Object.keys(urlParamsComing).forEach((name) => {
		const subname = getUrlParameter(name);
		if (subname) {
			urlParamsComing[name] = subname;
		}
	});
</script>

<section class="rowLeft">
	{#if urlParamsComing.utm_source === 'AMPLIFI'}
		<div class="border">
			<header>
				<InfoSpaceBetween>
					<h2 slot="left" class="linearText">You got AMPed!</h2>
					<p>You came here via an AmpliFi Link!</p>
				</InfoSpaceBetween>
			</header>
			<div class="row">
				<div class="incentivesWrapper noBorder">
					<div>For every ETH contribution you get</div>
					<div class="row flexEnd">
						<div class="infoContainer referred">
							<!-- this Icon has to be an amp svg -->
							<Icon name="amplifi" />
							<div>2.5% in $AMP</div>
						</div>
						<a
							href="https://amplifi.cre8r.vip/#/campaigns/amplifi/amplifi-juicebox"
							target="_blank"
							rel="noreferrer noopenerrer"
						>
							Learn more
						</a>
						<!-- <div>AND</div>
				<div class="infoContainer">
					<Icon name="amplifi" />
					<div>matching $AMP</div>
				</div> -->
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="border">
			<header>
				<InfoSpaceBetween>
					<h4 slot="left">Join AmpliFi Referral Program</h4>
					<div slot="right">
						<a
							href="https://amplifi.cre8r.vip/#/campaigns/amplifi/amplifi-juicebox"
							target="_blank"
							rel="noreferrer noopenerrer"
						>
							Become an AmpliFi Affiliate
						</a>
					</div>
				</InfoSpaceBetween>
			</header>
			<div class="row">
				<div class="incentivesWrapper">
					<h5>For every referral you will get</h5>
					<div class="row alignCenter">
						<div class="infoContainer">
							<Icon name="ethereum" />
							<div>5% in ETH</div>
						</div>
						<!-- <div>AND</div>
					<div class="infoContainer">
						<Icon name="amplifi" />
						<div>matching $AMP</div>
					</div> -->
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
		border-bottom: 3px solid #6922FF;
		transition: border-bottom 0.3s ease-in-out;
	}

	a:hover {
		border-bottom: 3px solid black;
	}

	header {
		margin-bottom: 20px;
	}

	.linearText {
		background: linear-gradient(267.46deg, #6922ff -12.15%, #fc2f00 111.69%);
		background: -webkit-linear-gradient(267.46deg, #6922ff -12.15%, #fc2f00 111.69%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		align-self: baseline;
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

	.rowLeft {
		display: flex;
		flex-flow: row wrap;
		margin-left: -20px;
		margin-right: -20px;
		padding-bottom: 40px;
		row-gap: 0px;
	}

	.alignCenter {
		align-items: center;
	}

	.flexEnd {
		align-items: flex-end;
	}

	.border {
		border: 2px solid #959595;
		padding: 16px;
	}

	.incentivesWrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 9px;
		padding: 15px 20px;
		border: 1px solid #959595;
		width: fit-content;
		min-width: 30%;
	}

	.noBorder {
		border: none;
	}

	.kpisWrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 9px;
		padding: 15px 20px;
		border: 1px solid #959595;
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

	.infoContainer.referred {
		background: linear-gradient(267.46deg, #6922ff -12.15%, #fc2f00 111.69%);
	}

	@media (max-width: 768px) {
		section {
			flex: 0 0 100%;
		}
	}
</style>
