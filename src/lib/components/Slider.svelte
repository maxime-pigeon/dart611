<script>
	export let images;

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
		margin-top: 1rem;
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

	p {
		text-align: center;
		margin-top: 0.25rem;
		font-variant-numeric: tabular-nums;
	}
</style>

<div on:mousemove={handleMousemove} bind:clientWidth={w} bind:this={div}>
	{#each images as image, i}
		<img
			srcset={image}
			alt={image}
			class:active={p >= (100 / images.length) * i &&
				p <= (100 / images.length) * (i + 1)}
		/>
	{/each}
</div>
<p>
	{#if Math.ceil(p / (100 / images.length)) == 0}
		1
	{:else}
		{Math.ceil(p / (100 / images.length))}
	{/if}
	/ {images.length}
</p>
