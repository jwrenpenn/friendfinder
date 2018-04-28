const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(bodyParser.text());

app.use(bodyParser.json({type:'appplication/vnd.api+json'}));

require('./app/routing/apiRouting.js') (app);
require('./app/routing/htmlRouting.js')(app);

app.listen(PORT, function() {
    console.log('Example app listening on port'+PORT);
});
