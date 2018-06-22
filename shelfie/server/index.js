const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller.js');


const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err) );

app.post('/api/product', products_controller.create);
app.get('/api/inventory', products_controller.getInventory);
app.put('/api/product/:id', products_controller.update);
app.delete('/api/product/:id', products_controller.delete);




const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}`); });




// const port = 4000;
// app.use('/', express.static(__dirname));