build:
	esbuild ./examples/index.ts --bundle --outfile=./examples/index.js --platform=node --sourcemap

fmt:
	prettier --config .prettierrc './**/*.ts' --write