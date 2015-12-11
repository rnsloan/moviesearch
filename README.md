[http://mmoviesearch.herokuapp.com](http://mmoviesearch.herokuapp.com/) (heroku dyno may take a while to start)

![preview](https://cloud.githubusercontent.com/assets/2513462/10240876/bd3dd970-6924-11e5-9c67-a99e26e44f02.png)

Movie search using the [https://www.themoviedb.org](themoviedb) api and Material Design. 

Built to test out a few recent things in the react ecosystem (functional components, router v1, shallow renderer)

Uses a [signals library](https://github.com/Hypercubed/mini-signals) instead of a store to communicate between components.

### Note: Material Design Lite Usage

This project uses [http://www.getmdl.io](http://www.getmdl.io/) for the Material Design styles. 

I recommend looking at this issue before deciding to use in a CommonJS project: [https://github.com/google/material-design-lite/issues/833](https://github.com/google/material-design-lite/issues/833). 

At the time of writing, the main JavaScript file is constructed to be loaded using a `<script>` tag and the current workaround detailed in the github issue can cause pain when unit testing react components.

