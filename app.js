const express = require('express');
const expressLayouts = require('express-ejs-layouts'); // <-- 1. Panggil library
const path = require('path');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
