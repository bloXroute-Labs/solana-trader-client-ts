build:
	esbuild ./examples/index.ts --bundle --outfile=./examples/index.ts --platform=browser --sourcemap

fmt:
	prettier --config .prettierrc './**/*.ts' --write