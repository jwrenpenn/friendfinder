const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

require('./app/routing/api-routes.js') (app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
    console.log('Example app listening on port'+PORT);
});