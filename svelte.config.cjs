const static = require("@sveltejs/adapter-static");
const imagetools = require("vite-imagetools");

module.exports = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: static(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		vite: {
			plugins: [imagetools()],
		},
	},
};
