<script>
	import Slider from "../../components/Slider.svelte";

	import Image1 from "./1.jpg?width=600;1200&jpg&srcset";
	import Image2 from "./2.jpg?width=600;1200&jpg&srcset";
	import Image3 from "./3.jpg?width=600;1200&jpg&srcset";
	import Image4 from "./4.jpg?width=600;1200&jpg&srcset";
	import Image5 from "./5.jpg?width=600;1200&jpg&srcset";
	import Image6 from "./6.jpg?width=600;1200&jpg&srcset";

	const images = [Image2, Image6, Image5];
	const images2 = [Image3, Image4];
</script>

<img srcset={Image1} alt="image1" />

<p>
	As an architect and designer, I often re-imagine spaces after an initial
	critique and appreciation. I then try to establish each element’s
	functionality, differentiating value and participation. My perception of
	space and surrounding environments changed drastically after the pandemic
	came into existence. In the past year, the world came to a standstill after
	the outbreak of the Covid-19 pandemic. During this time, interactions have
	been minimal making people crave company and conversation. This project is
	an attempt to change the ways we dine during a pandemic while reframing our
	meaning of social connectedness.
</p>

<p>
	A spatial strategy in a restaurant is proposed to encourage safety and
	socialisation during a pandemic, by exploring biological ontologies,
	affordances of objects and actor-network theories. The overarching question
	I am trying to answer is how social distancing and social connectedness may
	co-exist in a communal dining space.
</p>

<Slider images={images2} />

<p>
	Thinking through different configurations of communal spaces and the
	logistics of conveyor belts resulted in a 1:15 scaled model of 2500sq.ft
	that could cater to 50 occupants at a given time. The chef station performs
	as a central nucleus and converging point for all the conveyor belts. The
	prototype explores an operating system of three demarcated zones/nodes (A
	purple zone for individuals, a blue zone for groups of 2 and a yellow zone
	for families and larger groups) for easy identification and crowd
	management.
</p>

<p>
	The operating system identifies human-to-human, human-to-belt and
	human-to-chef interactions and allows interlaced conversations between a
	family dining around one convoluted belt and a family dining at another.
</p>

<Slider {images} />

<p>
	The proposed dining arrangement is a result of abductive reasoning from
	gathered observations of various layouts, shapes, forms and materials. I
	have also tried to adopt a multidisciplinary approach that combines colour
	theories and gamification aspects of interaction design as well as
	architectural design strategies of zoning, scale and form.
</p>
