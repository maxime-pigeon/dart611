<script>
	import Slider from "../../components/Slider.svelte";

	import GIF from "./modules.webp";
	import GIF2 from "./modules.gif";
	import Banner from "./banner.png?width=600;1200&jpg&srcset";
	import Image1 from "./01.jpg?width=600;1200&jpg&srcset";
	import Image2 from "./02.jpg?width=600;1200&jpg&srcset";
	import Image3 from "./03.jpg?width=600;1200&jpg&srcset";
	import Image4 from "./04.png?width=600;1200&jpg&srcset";
	import Image5 from "./05.png?width=600;1200&jpg&srcset";
	import Image6 from "./06.jpg?width=600;1200&jpg&srcset";
	import Image7 from "./07.jpg?width=600;1200&jpg&srcset";
	import Image8 from "./08.jpg?width=600;1200&jpg&srcset";

	const images = [
		Image1,
		Image2,
		Image3,
		Image4,
		Image5,
		Image6,
		Image7,
		Image8,
	];
</script>

<img src={GIF2} srcset={GIF} alt="GIF" />

<p>
	I am a tinkerer of ideas and methods. I seek serendipity through chance and
	experimentation with low-threshold technologies and critical thinking. I
	mess about with electronics, computers, coding, and machines but under the
	auspices of seeking opportunities to develop practical knowledge. Whatever
	blend of technology and art that I am into, I have been fortunate enough to
	have found a space for designing educational activities that sit at the
	intersections of digital fabrication and creative interventions with
	technology.
</p>

<img srcset={Banner} alt="Banner" />

<p>
	The Tinker Modules presented here were initially inspired by my desire to
	create geometric kinetic art and to use digital fabrication to seek
	alternative mediums for my creative practice. The project shifted from a
	standalone work into a modular platform for tinkering with code,
	computer-controlled cutting, and geometry through an iterative process. This
	work demonstrates a playful approach to integrating technology that is
	equally selective in its choice of materials and tools, including craft
	supplies, discarded LEGO motors, and the use of math and isometries. While
	not the focus, it is through such constraints that these modules embody
	sustainable and critical approaches to making. They present new modes of
	creative expression that can be equally useful as templates for others to
	use and explore. I hope that this work will contribute to my broader
	interests in designing creative tool kits that support digital fabrication
	and creative interventions with technology in learning environments.
</p>

<Slider {images} />

<p>
	I believe that the tools and spaces situated in our learning experiences
	profoundly affect our connection to the world. Our creative and technical
	confidence emerge from these learning experiences and provides a lens
	through which we view our ability to seek new knowledge. This project should
	speak to artists and designers about the kinds of relationships they have
	with the creative technologies they use and how this relates to their
	mindset towards learning.
</p>
