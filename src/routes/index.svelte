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

	svg {
		width: 100%;
	}

	button {
		display: none;
		align-items: center;
		justify-content: center;
		width: 2rem;
		flex-shrink: 0;
		padding: 0;
		background: transparent;
		filter: drop-shadow(0 0px 1px rgba(0, 0, 0, 0.2));
	}

	:global(section):hover button {
		display: flex;
	}

	button:active {
		background: gainsboro;
	}

	button:first-of-type:hover svg circle {
		fill: limegreen;
	}

	button:last-of-type:hover circle {
		fill: tomato;
	}

	button:hover path {
		fill: white;
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
				<button on:click={addToList}
					><svg
						viewBox="0 0 26 26"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="13" cy="13" fill="white" r="13" /><path
							d="m6.63 13.54a.72.72 0 0 1 -.23-.23.65.65 0 0 1 -.08-.31.68.68 0 0 1 .08-.31.69.69 0 0 1 .23-.22.56.56 0 0 1 .31-.09h12.12a.56.56 0 0 1 .31.09.64.64 0 0 1 .31.53.56.56 0 0 1 -.09.31.61.61 0 0 1 -.22.23.65.65 0 0 1 -.31.08h-12.12a.65.65 0 0 1 -.31-.08zm6.06 6.05a.61.61 0 0 1 -.23-.22.65.65 0 0 1 -.08-.31v-12.12a.68.68 0 0 1 .08-.31.72.72 0 0 1 .23-.23.64.64 0 0 1 .62 0 .72.72 0 0 1 .23.23.68.68 0 0 1 .08.31v12.12a.65.65 0 0 1 -.08.31.61.61 0 0 1 -.23.22.58.58 0 0 1 -.62 0z"
							fill="black"
						/></svg
					></button
				>
				{#if sectionCount.length == 1}
					<button disabled />
				{:else}
					<button on:click={() => removeFromList(index)}
						><svg
							viewBox="0 0 26 26"
							xmlns="http://www.w3.org/2000/svg"
							><circle cx="13" cy="13" fill="white" r="13" /><path
								d="m7.65 8.4a.55.55 0 0 1 0-.31.51.51 0 0 1 .15-.28.6.6 0 0 1 .29-.16.58.58 0 0 1 .32 0 .57.57 0 0 1 .28.16l9.51 9.51a.69.69 0 0 1 .15.28.55.55 0 0 1 0 .31.51.51 0 0 1 -.15.28.57.57 0 0 1 -.28.16.58.58 0 0 1 -.32 0 .53.53 0 0 1 -.28-.16l-9.52-9.51a.69.69 0 0 1 -.15-.28zm9.67-.59a.53.53 0 0 1 .28-.16.58.58 0 0 1 .32 0 .57.57 0 0 1 .28.16.51.51 0 0 1 .15.28.55.55 0 0 1 0 .31.69.69 0 0 1 -.15.28l-9.51 9.51a.57.57 0 0 1 -.28.16.58.58 0 0 1 -.32 0 .6.6 0 0 1 -.29-.16.51.51 0 0 1 -.15-.28.55.55 0 0 1 0-.31.69.69 0 0 1 .15-.28z"
								fill="black"
							/></svg
						></button
					>
				{/if}
			</Section>
		{/each}
	</main>
{/if}
