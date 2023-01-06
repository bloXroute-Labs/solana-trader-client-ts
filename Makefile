PB_JS_IMAGE_NAME=bloxroute/bdn-protobuf:v3.19.3-js

proto:
	docker run -v $(CURDIR)/bxsolana/proto:/home/node/out \
			   -v $(CURDIR)/solana-trader-proto/proto:/home/node/in $(PB_JS_IMAGE_NAME) \
		  	bash -c  \
			'grpc_tools_node_protoc \
				--plugin=protoc-gen-ts=/usr/local/bin/protoc-gen-ts \
				--ts_out=grpc_js:../out \
				--js_out=import_style=commonjs,binary:../out \
				--grpc_out=grpc_js:../out \
				$$(find . -iname "*.proto")'

