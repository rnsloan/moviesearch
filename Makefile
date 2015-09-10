## eval "$(docker-machine env dev)"

## docker commands to be run in host OS
dockerRsync:
	docker-osx-dev -e .git -e node_modules -e public/bundle.js

dockerRun:
	docker run -it --name moviesearch -v ${PWD}/:/usr/src/ -p 3000:3000 -w /usr/src/ node:4.0 /bin/bash

dockerStart:
	docker start -ai moviesearch

dockerAttach:
	docker exec -it moviesearch bash

