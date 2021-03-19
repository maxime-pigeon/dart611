<script>
	import Section from "./components/Section.svelte";

	import { sectionCount } from "./stores/stores";
</script>

<style>
	main {
		display: flex;
	}

	@media only screen and (max-width: 750px) {
		:global(section + section) {
			display: none;
		}
	}
</style>

<main>
	{#each $sectionCount as item}
		<Section />
	{/each}
</main>
