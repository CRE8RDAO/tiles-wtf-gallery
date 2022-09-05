<script lang="ts">
	import {
		web3Connect,
		web3Disconnect,
		connectedAccount,
		readNetwork,
		switchNetwork
	} from '$stores/web3';
	import { getTruncatedAddress } from '$juicebox/components/Address.svelte';
	import { blocknativeNetworks } from '$juicebox/constants/networks';
	import EnsOrAddress from '$juicebox/components/EnsOrAddress.svelte';

	let buttonElement: HTMLElement;
	let dropdownOpened = false;

	function handleWindowClick(event: MouseEvent) {
		if (dropdownOpened) {
			const target = event.target as HTMLElement;
			if (!buttonElement?.contains(target)) {
				dropdownOpened = false;
			}
		}
	}
	let innerWidth = 0;
</script>

<svelte:window on:click={handleWindowClick} bind:innerWidth />

<header>
	<div class="left">
		<a class="logo-wrapper" href="/?{$readNetwork ? `network=${$readNetwork?.alias}` : ''}">
			<img src="/favicon.svg" alt="Logo" />
		</a>
	</div>

	<div class="right">
		{#if $connectedAccount}
			<p
				on:click={() => (dropdownOpened = !dropdownOpened)}
				style="user-select: none"
				bind:this={buttonElement}
			>
				<span class="address">
					<span>
						<EnsOrAddress address={$connectedAccount} showTooltip={false} />
					</span>
					{#if innerWidth >= 650}<span>({$readNetwork.alias})</span>{/if}
				</span>
				{#if dropdownOpened}
					<ul class="dropdown">
						<li><a href="/user">{getTruncatedAddress($connectedAccount)}</a></li>
						{#each blocknativeNetworks as network}
							<li
								on:click={async () => {
									await switchNetwork(Number(network.id));
									dropdownOpened = false;
								}}
								class:active={$readNetwork.alias === network.alias}
							>
								{network.alias}
							</li>
						{/each}
						<li on:click={web3Disconnect}>Disconnect</li>
					</ul>
				{/if}
			</p>
			<button class="disconnect" on:click={web3Disconnect}>X</button>
		{:else}
			<button on:click={web3Connect}>Connect</button>
		{/if}
	</div>
</header>

<style lang="scss">
	.dropdown {
		position: absolute;
		z-index: 10;
		right: 2rem;
		top: 100%;
		list-style: none;
		padding: 0;
		box-shadow: 0 0 5px #eee;
		background: var(--background-l0);
	}

	.dropdown li {
		cursor: pointer;
		padding: 5px 10px;
		border-bottom: 1px solid #eee;
	}
	.dropdown li.active {
		font-weight: bold;
	}
	header,
	.right,
	.left {
		display: flex;
		padding: 5px 7px;
	}

	header {
		justify-content: space-between;
	}

	.right,
	.left {
		align-items: center;
		gap: 10px;
	}
	.left {
		gap: 0;
	}

	.left a {
		/* color: inherit; */
		color: black;
		text-decoration: none;
		position: relative;
	}

	.right {
		position: relative;
		justify-content: flex-end;
		span.address {
			cursor: pointer;
			color: var(--text-primary);
			display: inline-flex;
		}
	}

	img {
		width: 25px;
	}

	button,
	p {
		margin: 0;
		margin-left: auto;
	}

	li a {
		color: var(--text-primary);
	}

	button {
		border: none;
		background: none;
		cursor: pointer;
		padding: 0px 0px 0px 0px;
		transform: translateY(1px);
		border-bottom: 3px solid gold;
		&:hover {
			border-bottom: 3px solid black;
		}
		&.disconnect {
			/*padding: 0;*/
			position: relative;
			justify-content: flex-end;
		}
	}
</style>
