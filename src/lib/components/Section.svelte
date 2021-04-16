<script>
	import Pigeon from "../projects/pigeon/Pigeon.svelte";
	import Duhe from "../projects/duhe/Duhe.svelte";
	import Couture from "../projects/couture/Couture.svelte";
	import Zemke from "../projects/zemke/Zemke.svelte";
	import Kamal from "../projects/kamal/Kamal.svelte";
	import Mathewson from "../projects/mathewson/Mathewson.svelte";
	import Smart from "../projects/smart/Smart.svelte";

	import About from "../projects/About.svelte";

	export let sectionCount;

	const options = [
		{
			title: "Alec Mathewson: CUT, CREATE, TRIANGULATE",
			component: Mathewson,
		},
		{
			title: "William Couture: TEMPORAL FIBER",
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
			title: "Larissa Zemke: CARING MASKS",
			component: Zemke,
		},
		{
			title: "Dina Kamal: THE VALUE OF NATURE",
			component: Kamal,
		},
		{
			title: "Harley Smart: DEEP LEARNING DESCRIBES BOOKWORKS",
			component: Smart,
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
		background: white;
	}

	div {
		padding: 2.5rem 1rem;
	}

	select {
		width: 100%;
		font: inherit;
		padding: 0 1.75rem 0 0.5rem;
		border-radius: 2px;
		background: transparent;
		background-image: url("/chevron.svg");
		background-position-y: center;
		background-position-x: calc(100% - 5px);
		background-repeat: no-repeat;
		background-size: 13px;
	}

	select:hover {
		background-color: whitesmoke;
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
