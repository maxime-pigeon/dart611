<script>
	import Slider from "../../components/Slider.svelte";

	import Image1 from "./01.jpg?width=600;1200&webp&jpg&srcset";
	import Image2 from "./02.jpg?width=600;1200&webp&jpg&srcset";
	import Image3 from "./03.jpg?width=600;1200&webp&jpg&srcset";
	import Image4 from "./04.jpg?width=600;1200&webp&jpg&srcset";
	import Image5 from "./07.jpg?width=600;1200&webp&jpg&srcset";
	import Image6 from "./06.jpg?width=600;1200&webp&jpg&srcset";
	import Image8 from "./08.jpg?width=600;1200&webp&jpg&srcset";
	import Image9 from "./09.jpg?width=600;1200&webp&jpg&srcset";
	import Image10 from "./010.jpg?width=600;1200&webp&jpg&srcset";
	import Image11 from "./011.jpg?width=600;1200&webp&jpg&srcset";

	const images = [Image4, Image9, Image2, Image3, Image10, Image11];
	const images2 = [Image6, Image5, Image8];
</script>

<img srcset={Image1} alt="image1" />

<p>
	In the context of the current pandemic and Quebec’s new health regulations
	that make procedural masks with filters mandatory on all university
	campuses, this project explores DIY sustainable mask designs that care more
	for users and the environment. Medical mask design has prioritized function
	in terms of preventing the spread of the virus with little regard for users’
	other health conditions and the environment. It is in this context that the
	project aims to rethink mask design by placing sustainability and the user
	at the center of its approach.
</p>

<p>
	The caring mask project is inspired by Japanese philosophies of wabi-sabi
	and mottainai and Issey Miyake’s zero-waste concept of A-POC (A-PIECE of
	CLOTH). Wabi-sabi is an aesthetic philosophy that embraces imperfection.
	Mottainai is an expression used in daily life in Japan to express a sense of
	regret over waste and encourage reuse.
</p>

<p>
	Slow design and Design-with-Care principles that state “a world in which to
	be, is to care…“ were kept in mind during the research, design and
	prototyping of the caring masks. The guiding question was the following: How
	can we design masks that care for people and the planet?
</p>

<p>
	For the design development of this project, the A-POC concept
	(piece-of-cloth) was applied as a zero-waste strategy to upcycle fabric
	samples from the high-end bedding industry into masks.Japanese techniques of
	origami and sashiko stitching were used to construct DIY masks that are
	sustainably made using minimal resources of natural cotton and linen fabrics
	and thread. The origami form allows for extra breathing room and a playful
	shape that morphs the face into an animal-like form.
</p>

<Slider {images} />

<p>
	The design process involved upcycling of fabrics, natural dyeing and hand
	stitching, which embrace wabi-sabi’s concept of imperfection. “The dyeing
	process allows for the hand of nature to weave its spell into the fabric, as
	with all-natural mediums, there is a degree of imperfection that can be seen
	and savored” (Juniper 2003). Tumeric and rosemary were used to naturally dye
	the fabric to explore soothing properties for users with sensitive skin.
</p>

<p>
	The project seeks to encourage users to build more meaningful relationships
	with the textiles in their lives in a sustainable, fun and stylish way. The
	tutorial video below allows users to make their own caring masks with a
	minimal toolkit (see below). For the dissemination, masks and tool kits are
	given to friends and family members to encourage them to make caring masks
	for themselves and their community.
</p>

<Slider images={images2} />

<p>
	We hope to inspire users to create and consume with more care. Together, let
	us create more sustainable and meaningful relationships with the textiles in
	our lives. And, while we’re at it, let’s have fun and stay stylish.
</p>

<!-- <p>
	<a href="mailto:larissa.zemke@gmail.com">larissa.zemke@gmail.com</a>
Facebook: Japanese Sustainable Fashion and Textiles
IG: @auzette , @japanecofashiontextiles
</p>



The following tools are needed to create a caring mask:


Upcycled Materials:  

100% cotton fabric (US letter size)
100% embroidery thread
2 straps from a disposable mask

Equipment:

Embroidery needle
Iron
Ironing board
Scissors 
Pins -->
