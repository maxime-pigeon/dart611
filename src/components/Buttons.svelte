<script>
	import { sectionCount } from "../stores/stores";

	function addToList() {
		$sectionCount = [...$sectionCount, {}];
	}

	function removeFromList() {
		$sectionCount.splice(0, 1);
		$sectionCount = $sectionCount;
	}
</script>

<style>
	button {
		font: inherit;
	}

	@media only screen and (max-width: 750px) {
		button {
			display: none;
		}
	}
</style>

{#if $sectionCount.length == 1}
	<button disabled>-</button>
{:else}
	<button on:click={() => removeFromList()}>-</button>
{/if}
<button on:click={addToList}>+</button>
