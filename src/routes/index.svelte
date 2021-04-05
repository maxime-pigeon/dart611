<script>
	import { browser } from "$app/env";

	import Section from "$lib/components/Section.svelte";

	$: sectionCount = [{}, {}, {}];

	function addToList() {
		sectionCount = [...sectionCount, {}];
	}

	function removeFromList(i) {
		sectionCount.splice(i, 1);
		sectionCount = sectionCount;
	}
</script>

<style>
	main {
		display: flex;
	}

	button {
		font: inherit;
		line-height: 1.2;
		display: none;
		justify-content: center;
		align-items: center;
		width: 1.5rem;
		flex-shrink: 0;
	}

	button:active {
		background: gainsboro;
	}

	button:first-of-type {
		background-image: url("/close.svg");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 7px;
	}

	button:last-of-type {
		background-image: url("/plus.svg");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 8px;
	}

	:global(section):hover button {
		display: inherit;
	}

	@media only screen and (max-width: 750px) {
		:global(section + section) {
			display: none;
		}

		button {
			display: none !important;
		}
	}
</style>

{#if browser}
	<main>
		{#each sectionCount as item, index (item)}
			<Section {sectionCount}>
				{#if sectionCount.length == 1}
					<button disabled />
				{:else}
					<button on:click={() => removeFromList(index)} />
				{/if}
				<button on:click={addToList} />
			</Section>
		{/each}
	</main>
{/if}
