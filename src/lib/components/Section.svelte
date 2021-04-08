<script>
	import Pigeon from "../projects/pigeon/Pigeon.svelte";
	import Duhe from "../projects/duhe/Duhe.svelte";
	import Couture from "../projects/couture/Couture.svelte";
	import Zemke from "../projects/zemke/Zemke.svelte";
	import About from "../projects/About.svelte";

	export let sectionCount;

	const options = [
		{
			title: "William Couture: BUILDING THROUGH THE WINDOW",
			component: Couture,
		},
		{
			title: "Juliette Duhé: READING SHAPES, WRITING SCULPTURES",
			component: Duhe,
		},
		{
			title: "Maxime Pigeon: METHODICALLY UNMETHODICALLY",
			component: Pigeon,
		},
		{
			title: "Larissa Zemke: INCLUSIVE MASKS",
			component: Zemke,
		},
	];

	let selected = options[Math.floor(Math.random() * options.length)];
</script>

<style>
	section {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	nav {
		display: flex;
		position: fixed;
		top: 0;
		box-sizing: border-box;
		padding: 0.5rem;
	}

	div {
		padding: 2.5rem 1rem;
	}

	select {
		width: 100%;
		font: inherit;
		padding: 0 0.5rem;
		border-radius: 2px;
		background: gainsboro;
	}

	select:hover {
		background: lightgray;
	}

	@media only screen and (max-width: 750px) {
		nav {
			width: 100% !important;
		}

		section {
			height: auto;
		}
	}
</style>

<section>
	<nav style="width: calc(100%/{sectionCount.length})">
		<select bind:value={selected}>
			<optgroup label="Projects">
				{#each options as option}
					<option value={option}>{option.title}</option>
				{/each}
			</optgroup>
			<optgroup label="DART611: Interdisciplinary Practices in Design">
				<option value={{ component: About }}>ABOUT</option>
			</optgroup>
		</select>
		<slot />
	</nav>
	<div>
		<svelte:component this={selected.component} />
	</div>
</section>
