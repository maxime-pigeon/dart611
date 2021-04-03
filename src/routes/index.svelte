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
	}

	@media only screen and (max-width: 750px) {
		:global(section + section) {
			display: none;
		}

		button {
			display: none;
		}
	}
</style>

{#if browser}
	<main>
		{#each sectionCount as item, index (item)}
			<Section {sectionCount}>
				{#if sectionCount.length == 1}
					<button disabled>×</button>
				{:else}
					<button on:click={() => removeFromList(index)}>×</button>
				{/if}
				<button on:click={addToList}>+</button>
			</Section>
		{/each}
	</main>
{/if}
