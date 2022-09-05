<script lang="ts">
	import Button from './Button.svelte';

	export let click: (e: CustomEvent<MouseEvent>) => void;
	// NOTE: this is here to not show the unknown prop in console
	export const close = () => {};
</script>

<main>
	<h1>Thank you!</h1>
	<p>For your contribution. Check out our affiliate program on this page</p>
	<br />
	<div class="buttons">
		<Button type="primary" on:click|once={click}>Close</Button>
	</div>
</main>

<style>
	h1 {
		color: var(--text-header);
	}
	main {
		max-width: 350px;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
	}
</style>
