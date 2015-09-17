## eval "$(docker-machine env dev)"

## docker commands to be run in host OS
dockerRsync:
	docker-osx-dev -e .git -e node_modules -e public

dockerRun:
	@echo "Run the following with the MOVIEAPIKEY value provided:"
	@echo "docker run -it --name moviesearch -e MOVIEAPIKEY= -v ${PWD}/:/usr/src/ -p 3000:3000 -w /usr/src/ node:4.0 /bin/bash"

dockerStart:
	docker start -ai moviesearch

dockerAttach:
	docker exec -it moviesearch bash

dockerTest:
	## vnc://<boot2docker-ip>:5900
	docker run --name moviesearch-seleniumff -d -p 4444:4444 -p 5900:5900 selenium/standalone-firefox-debug
