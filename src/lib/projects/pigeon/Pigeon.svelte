<script>
	import Image1 from "./1.jpg?width=600;1200&webp&jpg&srcset";
	import Image2 from "./2.jpg?width=600;1200&webp&jpg&srcset";
	import Image3 from "./3.jpg?width=600;1200&webp&jpg&srcset";
	import Image4 from "./4.jpg?width=600;1200&webp&jpg&srcset";
	import Image5 from "./5.jpg?width=600;1200&webp&jpg&srcset";

	let m = 0;
	let w;
	let div;
	let divX;

	function handleMousemove(event) {
		divX = div.getBoundingClientRect().x;
		m = event.clientX - divX;
	}

	$: p = Math.round((m / w) * 100);
</script>

<style>
	div {
		width: 100%;
		position: relative;
		margin: 1rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		visibility: hidden;
		margin: 0;
	}

	img + img {
		position: absolute;
	}

	.active {
		visibility: visible;
	}
</style>

<div on:mousemove={handleMousemove} bind:clientWidth={w} bind:this={div}>
	<img srcset={Image1} alt="1" class:active={p <= 20} />
	<img srcset={Image2} alt="1" class:active={p > 20 && p <= 40} />
	<img srcset={Image3} alt="1" class:active={p > 40 && p <= 60} />
	<img srcset={Image4} alt="1" class:active={p > 60 && p <= 80} />
	<img srcset={Image5} alt="1" class:active={p > 80} />
</div>

<p>
	The German philosopher Theodor W. Adorno defines the essay genre as an
	unmethodical method. The essay, he writes, takes the arena of intellectual
	experience as its model, interweaving the battling
	arguments-slash-gladiators as in a carpet—it proceeds, so to speak,
	methodically unmethodically.
</p>
<p>
	Of course, being the good German philosopher that he is, Adorno never
	manages to explain exactly what he means by this. On the contrary, one can
	almost imagine him dropping the proverbial mic with a machiavellian grin,
	quite content to end his paragraph with the now famous oxymoronic formula, a
	formula that means both everything and nothing, and on which desperate
	graduate students will write countless theses, guaranteeing his eternal
	popularity as measured by <a href="https://scholar.google.ca"
		>Google Scholar</a
	> citations rankings.
</p>
<p>
	Well, this project is an attempt to weave (or unweave?) my own carpet, with
	the aim of understanding and enacting (or understanding by enacting) the
	essay’s unmethodical method. The resulting pilgrimage-in-the-form-of-a-book,
	which will comprise a collection of eclectic voices that reflect both
	directly and indirectly on Adorno’s formula, is dedicated to my dear
	partners in misfortune, my fellow readers of arcane philosophy, in hopes of
	allowing them, too, to understand whatever our German friend means.
</p>
