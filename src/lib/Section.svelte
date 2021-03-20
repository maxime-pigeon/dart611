<script>
	import Pigeon from "./projects/Pigeon.svelte";
	import Duhe from "./projects/Duhe.svelte";
	import Couture from "./projects/Couture.svelte";
	import Zemke from "./projects/Zemke.svelte";
	import About from "./projects/About.svelte";

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
		{
			title: "ABOUT",
			component: About,
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
		padding: 1rem;
	}

	select {
		width: 100%;
	}
</style>

<section>
	<nav style="width: calc(100%/{sectionCount.length})">
		<select bind:value={selected}>
			{#each options as option}
				<option value={option}>{option.title}</option>
			{/each}
		</select>
		<slot />
	</nav>
	<div>
		<svelte:component this={selected.component} />
	</div>
</section>
