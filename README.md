
Movie search using the [https://www.themoviedb.org](themoviedb) api and Material Design. 

### Note: Material Design Lite Usage

This project uses [http://www.getmdl.io](http://www.getmdl.io/) for the Material Design styles. 

I **strongly** recommend not using this in a CommonJS project until this issue is fixed: [https://github.com/google/material-design-lite/issues/833](https://github.com/google/material-design-lite/issues/833). 

At the time of writing, the main JavaScript file is constructed to be loaded using a `<script>` tag and the current workaround detailed in the github issue causes a lot of pain when unit testing react components (hence the lack of unit tests in this project. If you want to see the beginnings of trying to write tests you can look at the branch named `unit-tests`).  
