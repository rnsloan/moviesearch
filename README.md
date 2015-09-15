## Material design resources

 - [http://material-ui.com/](http://material-ui.com/) - not currently compatible with react 0.14
 - [http://www.getmdl.io/](http://www.getmdl.io/)
 - [http://materializecss.com/](http://materializecss.com/)
 
### Material Design Javascript binding:

- [https://gist.github.com/DarrenN/5c8e6df6eabb9632af74](https://gist.github.com/DarrenN/5c8e6df6eabb9632af74) 

```
componentDidMount() {
    const Material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
    let layout = document.getElementById('layout');
    Material.componentHandler.upgradeElement(layout, 'MaterialLayout');
  }
```   