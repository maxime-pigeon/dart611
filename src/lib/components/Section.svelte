<script>
	import Beauchesne from "../projects/beauchesne/Beauchesne.svelte";

	import About from "../projects/About.svelte";

	export let sectionCount;

	const options = [
		{
			title: "Antoine Beauchesne: LUDOPEDIA",
			component: Beauchesne,
		},
		// {
		// 	title: "Alexandre Bustamante: COUNTLESS",
		// 	component: Bustamante,
		// },
		// {
		// 	title: "William Couture: TEMPORAL FIBER",
		// 	component: Couture,
		// },
		// {
		// 	title: "Juliette Duhé: READING SHAPES, WRITING SCULPTURES",
		// 	component: Duhe,
		// },
		// {
		// 	title: "Emily Gorner: PALLIATIVE CARE FOR THE END OF TIMES",
		// 	component: Gorner,
		// },
		// {
		// 	title: "Dina Kamal: THE VALUE OF NATURE",
		// 	component: Kamal,
		// },
		// {
		// 	title: "Alec Mathewson: CUT, CREATE, TRIANGULATE",
		// 	component: Mathewson,
		// },
		// {
		// 	title: "Maxime Pigeon: METHODICALLY UNMETHODICALLY",
		// 	component: Pigeon,
		// },
		// {
		// 	title:
		// 		"Hosna Salimi: DEVELOPING A CULTURE TRAINING PLATFORM FOR SOJOURNERS",
		// 	component: Salimi,
		// },
		// {
		// 	title: "Harley Smart: DEEP LEARNING DESCRIBES BOOKWORKS",
		// 	component: Smart,
		// },
		// {
		// 	title: "Lindsay Weller: [ANTI-SOD] EXPLORING MYCELIAL MESH METHODS",
		// 	component: Weller,
		// },
		// {
		// 	title: "Larissa Zemke: CARING MASKS",
		// 	component: Zemke,
		// },
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
