const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
  if (path.extname(req.path).length > 0) {
    // normal static file request
    next();
  }
  else {
    req.url = '/index.html';
    next();
  }
});

//heroku environment defines a port
app.set('port', (process.env.PORT || 3000));

// static file serve
app.use(express.static('./public'));
app.listen(app.get('port'));

