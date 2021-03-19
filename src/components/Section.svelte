<script>
	import Buttons from "./Buttons.svelte";

	import Pigeon from "./projects/Pigeon.svelte";
	import Duhe from "./projects/Duhe.svelte";
	import Couture from "./projects/Couture.svelte";
	import Zemke from "./projects/Zemke.svelte";
	import About from "./projects/About.svelte";

	const options = [
		{
			title: "Building Through the Window by William Couture",
			component: Couture,
		},
		{
			title: "Reading Shapes, Writing Sculptures by Juliette Duhé",
			component: Duhe,
		},
		{
			title: "Methodically Unmethodically by Maxime Pigeon",
			component: Pigeon,
		},
		{
			title: "Inclusive Masks by Larissa Zemke",
			component: Zemke,
		},
		{
			title: "About",
			component: About,
		},
	];

	let selected = options[Math.floor(Math.random() * options.length)];
</script>

<style>
	section {
		width: 100%;
		height: 100vh;
		padding: 1rem;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	div {
		display: flex;
		position: sticky;
		top: 0;
	}

	select {
		width: 100%;
	}
</style>

<section>
	<div>
		<select bind:value={selected}>
			{#each options as option}
				<option value={option}>{option.title}</option>
			{/each}
		</select>
		<Buttons />
	</div>
	<svelte:component this={selected.component} />
</section>
