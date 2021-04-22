<script>
	import Slider from "../../components/Slider.svelte";

	import Image1 from "./1.jpg?width=600;1200&png&srcset";
	import Image2 from "./2.jpg?width=600;1200&jpg&srcset";
	import Image3 from "./3.jpg?width=600;1200&jpg&srcset";
	import Image4 from "./4.jpg?width=600;1200&jpg&srcset";
	import Image5 from "./5.jpg?width=600;1200&jpg&srcset";

	import c1 from "./c1.png?width=600;1200&png&srcset";
	import c2 from "./c2.png?width=600;1200&png&srcset";
	import c3 from "./c3.png?width=600;1200&png&srcset";
	import c4 from "./c4.png?width=600;1200&png&srcset";
	import c5 from "./c5.png?width=600;1200&png&srcset";

	const images = [c1, c2, c3, c4, c5];
	const images1 = [Image1, Image3];
</script>

<style>
	span {
		font-weight: bold;
	}

	#plants {
		color: green;
	}

	#trees {
		color: brown;
	}

	#light {
		color: gold;
	}

	#water {
		color: aqua;
	}

	#air {
		color: lightblue;
	}
</style>

<Slider images={images1} />

<p>
	People spend their lives trying to make money, a representation of value,
	that in and of itself has no value… livelihoods revolving around a piece of
	paper.
</p>

<p>
	I decided to take a symbolic approach to this project and make money using
	reclaimed paper, mixed with natural materials… Creating “value” out of
	already valuable, natural, raw materials.
</p>

<img srcset={Image2} alt="Image2" />

<p>
	The creation process documents the making of a tangible piece of paper; art
	that represents the currency of nature. The projects’ objective is to bring
	awareness to the value, or lack, of nature in the built environment and
	perhaps provoke thought and discussion around the topic.
</p>

<Slider {images} />

<p>
	To put the topic in context, according to McMahan, PhD. of behavioral and
	experiential psychology, “brief contact with natural environments has been
	found to improve cognition, decrease stress, decrease blood pressure,
	enhance emotion, and increase self-esteem”, all of which contribute to one’s
	wellbeing. One would view the value of human/nature connectedness as being
	priceless. After all, nature doesn’t need people for its benefit or to
	survive, people need nature for their benefit and for their own survival.
	Why has the value of nature in the built environment decreased, reduced to
	aesthetic? In interior design and in the built environment in general, there
	is room for growth, to move towards more human/nature connectedness, to
	invest in it and to increase its value.
</p>

<p>
	The project focuses on the bills of money that each represent one of the
	five elements of nature: <span id="plants">Plants</span>,
	<span id="trees">Trees</span>,
	<span id="light">Natural Light</span>, <span id="water">Water</span> and
	<span id="air">Fresh Air</span>. I have categorized these five elements as I
	feel they represent both the in and outside of a built environment. Plants
	brought indoors, bring a touch of nature inside, while trees outside
	contribute to shade, and add the sound of rustling leaves along with melodic
	chirps as birds build their nests. Water is represented by a possible nearby
	body of water, if one is so lucky, or by the rain, both visually and audibly
	soothing to some. And finally, and most importantly, fresh air accessed
	through windows.
</p>

<img srcset={Image4} alt="Image4" />

<p>
	Natures’ benefits and value for humans is invisible and intangible, yet are
	felt nevertheless. This project was meant to capture the creation of
	symbolic tangibility of the value of nature.
</p>

<img srcset={Image5} alt="Image5" />
