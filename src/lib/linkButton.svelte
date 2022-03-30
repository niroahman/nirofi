<script lang="ts">
	export let url = '';
	export let text = '';
</script>

<main>
	<button class="linkButton" type="submit" on:click={() => window.open(url)}>{text}</button>
</main>

<style>
	.linkButton {
		background-color: rgba(0, 195, 255, 0.7);
		border-bottom: 6px inset rgba(0, 0, 0, 0.5);
		border-left: 6px inset rgba(0, 0, 0, 0.5);
		border-right: 6px inset rgba(255, 255, 255, 0.5);
		border-top: 6px inset rgba(255, 255, 255, 0.5);

		font-family: 'Press Start 2P', cursive;
		color: white;
		padding: 12px;
	}
	.linkButton:hover {
		background-color: rgba(0, 195, 255, 0.9);
	}
</style>
