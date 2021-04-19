<script>
	import Slider from "../../components/Slider.svelte";

	import Image1 from "./1.jpg?width=600;1200&jpg&srcset";
	import Image2 from "./2.jpg?width=600;1200&jpg&srcset";
	import Image3 from "./3.jpg?width=600;1200&jpg&srcset";

	import GIF from "./output.webp";
	import GIF2 from "./output.gif";

	const images = [Image1, Image2, Image3];
</script>

<style>
	p:first-of-type {
		margin-top: 1rem;
	}
</style>

<p>
	As a practicing landscape designer, I learned that turfgrass is <i>the</i> go-to
	product. An elemental but effective way to approach my work is to know it is
	about lawns, and sod, and how I want to create something to replace it. Sod is
	a living product that answers the call of convenience in a fast-moving society
	that holds instant gratification in high regard, at the expense of vast resources.
	The production of sod overtakes huge areas of agricultural land, and incredible
	volumes of water & fertilizer are used. The grasses are then cut from the earth,
	a process which skims any remnants of healthy topsoil away forever, and the lonely,
	ploughed lands erode while they are left bare after harvests. Sadly, the production
	process is not the only problem, even in use, the types of emerald-green turf
	grasses we have come to value in landscapes are homogenized and again require
	nutritional support and frequent irrigation.
</p>

<p>
	I am highly concerned and critical of using precious resources at such an
	expense, and most specifically in this context concerned about the expense
	of the land itself. In cities land is stripped bare, built upon, and covered
	with concrete. Simultaneously, rural lands are stripped so that we may grow
	something to fill in the leftover spots around our urban destruction.
	Anti-sod aims to destroy this cycle, and to expand our ideas surrounding
	urban aesthetics.
</p>

<p>
	On the left is a diagram that I made early on in my research,
	conceptualizing a planting grid with mycelium nodes that contain Indigenous
	seeds. The connections between each node creates an integrated mesh—like
	seed network. Conceivably, this mesh could be rolled out similarly to the
	way sod is.
</p>

<Slider {images} />

<p>
	Fortunately, there is no soil involved in the creation of this mesh, which
	has the added environmental benefit that no farmland is needed to grow
	it—which is in great contrast with sod. This leaves land free for
	communities to use for food production and habitat regeneration. My
	prototype aims to explore whether mycelium can be trained to grow into a
	mesh pattern using hemp rope macrame as the growing medium.
</p>

<picture>
	<source srcset={GIF} type="image/webp" />
	<source srcset={GIF2} type="image/gif" />
	<img src={GIF2} alt="GIF" />
</picture>
