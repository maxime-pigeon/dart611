<script>
	import Section from "./components/Section.svelte";

	$: sectionCount = [{}, {}];

	function addToList() {
		sectionCount = [...sectionCount, {}];
	}

	function removeFromList(index) {
		sectionCount.splice(index, 1);
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
	}
</style>

<main>
	{#each sectionCount as item, index}
		<Section>
			{#if sectionCount.length == 1}
				<button disabled>-</button>
			{:else}
				<button on:click={() => removeFromList(index)}>-</button>
			{/if}
			<button on:click={addToList}>+</button>
		</Section>
	{/each}
</main>
