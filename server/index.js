const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const c = require('./controller.js')

const app = express(); 
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(error => {
    console.log('error',error);
})

app.post('/api/products', c.create);
app.get('/api/products', c.getAll);

const PORT = 3001;
app.listen(PORT, () => { console.log(`server is running on port ${PORT}`)
});