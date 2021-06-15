module.exports = {
	mode: "development",
	entry: {
		"main": "./src/index.tsx",
		"pdf.worker": "pdfjs-dist/build/pdf.worker.entry"
	},
	output: {
		filename: "[name].bundle.js",
		path: __dirname + "/dist"
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	devServer: {
		contentBase: ["./public", "./"],
		clientLogLevel: "info",
		publicPath: "/dist/",
		inline: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
			'Cache-Control': 'no-store'
		},
		proxy: {
			"/api/*": {
				target: "http://localhost:3333"
				// target: "http://prototypes.brq.only.sap:3333"
			}
		}
	},

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"],

		modules: ["src", "node_modules"]
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		// "react": "React",
		// "react-dom": "ReactDOM"
	},

	node: false
};