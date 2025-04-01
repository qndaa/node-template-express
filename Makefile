# Ensure that failures in piped commands are detected
SHELL = /bin/bash -o pipefail

# Current working directory
CWD := $(shell pwd)


#> help: Show help menu
.PHONY: help
help: Makefile
	@echo
	@echo "Available targets:"
	@echo
	@sed -n 's/^#>//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo

#> build: Build the containers
.PHONY: build
build:
	@echo "Compiling the typescript files"
	tsc --outDir ./dist

#> docker-build: Build docker image locally
.PHONY: docker-build
docker-build:
	docker buildx build --ssh default -f Dockerfile -t node-template:latest --load .

#> local-start: Build and start local server including all dependencies e.g database, etc.
.PHONY: local-start
local-start:
	@echo "Building and starting the local server"
	make build
	make docker-build
	docker-compose up;


#> local-stop: Stop the local server
.PHONY: local-stop
local-stop:
	@echo "Stopping the local server"
	docker-compose down

#> local-restart: Restart the local server
.PHONY: local-restart
local-restart:
	@echo "Restarting the local server"
	make local-stop
	make local-start

#> local-start-deps: Start the local server dependencies
.PHONY: local-start-deps
local-start-deps:
	@echo "Starting the local server dependencies"
	docker-compose up db

.PHONY: default
default: help
