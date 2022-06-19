const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');
const app = express();
app.use(bodyParser.json());
router(app);

db('mongodb://localhost:27017/platzi?readPreference=primary&appname=MongoDB%20Compass&ssl=false');

//app.use('/app'. express.static('public'));
app.listen(3000, () => console.log('Server started on port 3000'));