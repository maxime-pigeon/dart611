<script>
	let william = false;
	let juliette = true;
	let maxime = true;
</script>

<style>
	main {
		display: flex;
	}

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

	button {
		font: inherit;
	}

	select {
		width: 100%;
	}

	img {
		padding: 1rem;
	}
</style>

<main>
	{#if maxime}
		<section>
			<div>
				<select name="Projects" id="Projects">
					<option value="1"
						>METHODICALLY UNMETHODICAL by Maxime Pigeon
					</option>
					<option value="1"
						>READING SHAPES, WRITING SCULPTURES by Juliette Duhé</option
					>
					<option value="1"
						>BUILDING THROUGH THE WINDOW by William Couture</option
					>
					<option value="1">About</option>
				</select>
				<button on:click={() => (maxime = false)}>-</button>
				<button on:click={() => (william = true)}>+</button>
			</div>
			<img src="1.jpg" alt="1" />
			<p>
				The German philosopher Theodor W. Adorno defines the essay genre
				as an unmethodical method. The essay, he writes, takes the arena
				of intellectual experience as its model, interweaving the
				battling arguments-slash-gladiators as in a carpet—it proceeds,
				so to speak, methodically unmethodically.
			</p>
			<p>
				Of course, being the good German philosopher that he is, Adorno
				never manages to explain exactly what he means by this. On the
				contrary, one can almost imagine him dropping the proverbial mic
				with a machiavellian grin, quite content to end his paragraph
				with the now famous oxymoronic formula, a formula that means
				both everything and nothing, and on which desperate graduate
				students will write countless theses, guaranteeing his eternal
				popularity as measured by Google Scholar citations rankings.
			</p>
			<p>
				Well, this project is an attempt to weave (or unweave?) my own
				carpet, with the aim of understanding and enacting (or
				understanding by enacting) the essay’s unmethodical method. The
				resulting pilgrimage-in-the-form-of-a-book, which will comprise
				a collection of eclectic voices that reflect both directly and
				indirectly on Adorno’s formula, is dedicated to my dear partners
				in misfortune, my fellow readers of arcane philosophy, in hopes
				of allowing them, too, to understand whatever our German friend
				means.
			</p>
			<p>
				The German philosopher Theodor W. Adorno defines the essay genre
				as an unmethodical method. The essay, he writes, takes the arena
				of intellectual experience as its model, interweaving the
				battling arguments-slash-gladiators as in a carpet—it proceeds,
				so to speak, methodically unmethodically.
			</p>
			<p>
				Of course, being the good German philosopher that he is, Adorno
				never manages to explain exactly what he means by this. On the
				contrary, one can almost imagine him dropping the proverbial mic
				with a machiavellian grin, quite content to end his paragraph
				with the now famous oxymoronic formula, a formula that means
				both everything and nothing, and on which desperate graduate
				students will write countless theses, guaranteeing his eternal
				popularity as measured by Google Scholar citations rankings.
			</p>
			<p>
				Well, this project is an attempt to weave (or unweave?) my own
				carpet, with the aim of understanding and enacting (or
				understanding by enacting) the essay’s unmethodical method. The
				resulting pilgrimage-in-the-form-of-a-book, which will comprise
				a collection of eclectic voices that reflect both directly and
				indirectly on Adorno’s formula, is dedicated to my dear partners
				in misfortune, my fellow readers of arcane philosophy, in hopes
				of allowing them, too, to understand whatever our German friend
				means.
			</p>
		</section>
	{/if}
	{#if juliette}
		<section>
			<div>
				<select name="Projects" id="Projects">
					<option value="1"
						>READING SHAPES, WRITING SCULPTURES by Juliette Duhé</option
					>
					<option value="1"
						>Methodically UNMETHODICAL by Maxime Pigeon
					</option>
					<option value="1"
						>BUILDING THROUGH THE WINDOW by William Couture</option
					>
					<option value="1">About</option>
				</select>
				<button on:click={() => (juliette = false)}>-</button>
				<button on:click={() => (william = true)}>+</button>
			</div>
			<img src="4.jpg" alt="2" />
			<p>
				Creating a typeface on a computer screen can sometimes limit
				creativity. The digital work space, the white window of the
				software, the two-dimensional shaping, the grid proportions, and
				the basic tracing tools all constitute elements which influence
				the conception of a letter. Rare are the designers who leave
				these optimized digital tools, to bring some materiality and
				reality in their work process.
			</p>
			<p>
				A good example would be the approach of Karl Nawrot, a French
				designer who “thinks like an architect.” He develops
				experimental type systems and tools to produce innovative and
				enigmatic shapes. By leaving standards type design tools and
				environment, he sets his own constraints. For a moment, he
				forgets the letter, its origin and its heritage, and develops
				unexpected forms. This approach brings uniqueness to his work,
				and stands out from the type design landscape.
			</p>
			<p>
				According to the field of sculpture, the French type designer
				Morgane Van Torre included in a way, some materiality in her
				work process, by taking inspiration in sculptural shapes of
				Henry Moore, Hans Arp and Max Bill to realize a typeface.
				Despite this intention, the form wasn’t found by the physical
				manipulation of the material and this is not an approach I would
				like to consider for the project Reading Shapes, Writing
				Sculptures.
			</p>
			<p>
				Creating a typeface on a computer screen can sometimes limit
				creativity. The digital work space, the white window of the
				software, the two-dimensional shaping, the grid proportions, and
				the basic tracing tools all constitute elements which influence
				the conception of a letter. Rare are the designers who leave
				these optimized digital tools, to bring some materiality and
				reality in their work process.
			</p>
			<p>
				A good example would be the approach of Karl Nawrot, a French
				designer who “thinks like an architect.” He develops
				experimental type systems and tools to produce innovative and
				enigmatic shapes. By leaving standards type design tools and
				environment, he sets his own constraints. For a moment, he
				forgets the letter, its origin and its heritage, and develops
				unexpected forms. This approach brings uniqueness to his work,
				and stands out from the type design landscape.
			</p>
			<p>
				According to the field of sculpture, the French type designer
				Morgane Van Torre included in a way, some materiality in her
				work process, by taking inspiration in sculptural shapes of
				Henry Moore, Hans Arp and Max Bill to realize a typeface.
				Despite this intention, the form wasn’t found by the physical
				manipulation of the material and this is not an approach I would
				like to consider for the project Reading Shapes, Writing
				Sculptures.
			</p>
		</section>
	{/if}
	{#if william}
		<section>
			<div>
				<select name="Projects" id="Projects">
					<option value="1"
						>BUILDING THROUGH THE WINDOW by William Couture</option
					>
					<option value="1"
						>READING SHAPES, WRITING SCULPTURES by Juliette Duhé</option
					>
					<option value="1"
						>METHODICALLY UNMETHODICAL by Maxime Pigeon
					</option>
					<option value="1">About</option>
				</select>
				<button on:click={() => (william = false)}>-</button>
				<button on:click={() => (juliette = true)}>+</button>
			</div>
			<img src="3.png" alt="3" />
			<p>
				The premise of this project starts as a critique of
				architectural drawings. It is framed around the idea that the
				current modes of representation from the field are unable to
				convey the temporality of buildings. For example, Bruno Latour
				and Albena Yaneva write about the need that we have for a device
				that would transform the static view of a building into a
				sequence of fix frames informing us about the continuous flow
				from which a building is always constituted. Since buildings are
				usually represented, after the fact by a regime of idealized
				images—mostly photographic or pseudo-realistic rendering—this
				criticism makes us think about ways to represent buildings in
				all their complexity and through all their life cycle.
			</p>
			<p>
				Yaneva continues this reflection by asserting that “buildings
				are never immobile, still, stationary and put in space. As soon
				as you interact with it a complete qualitative impression
				emanates. A building can be understood only in a cumulative
				series of repetitive interactions that introduce its most
				enriching and defining features. There is a continuous building
				up of the architectural object”. This quote brings forward
				another important aspect of my project, which is to highlight
				how important is the observation and the engagement with a
				particular building for one to construct a relevant critique or
				a thoughtful portrait of it. In this project, the act of drawing
				will be involved in two moments to enhance the faculty to
				articulate and understand the case being studied.
			</p>
			<p>
				The premise of this project starts as a critique of
				architectural drawings. It is framed around the idea that the
				current modes of representation from the field are unable to
				convey the temporality of buildings. For example, Bruno Latour
				and Albena Yaneva write about the need that we have for a device
				that would transform the static view of a building into a
				sequence of fix frames informing us about the continuous flow
				from which a building is always constituted. Since buildings are
				usually represented, after the fact by a regime of idealized
				images—mostly photographic or pseudo-realistic rendering—this
				criticism makes us think about ways to represent buildings in
				all their complexity and through all their life cycle.
			</p>
			<p>
				Yaneva continues this reflection by asserting that “buildings
				are never immobile, still, stationary and put in space. As soon
				as you interact with it a complete qualitative impression
				emanates. A building can be understood only in a cumulative
				series of repetitive interactions that introduce its most
				enriching and defining features. There is a continuous building
				up of the architectural object”. This quote brings forward
				another important aspect of my project, which is to highlight
				how important is the observation and the engagement with a
				particular building for one to construct a relevant critique or
				a thoughtful portrait of it. In this project, the act of drawing
				will be involved in two moments to enhance the faculty to
				articulate and understand the case being studied.
			</p>
		</section>
	{/if}
</main>
