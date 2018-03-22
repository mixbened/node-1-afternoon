const express = require('express');
const bodyParser = require('body-parser');
const messages = require('./controllers/messages_controller')


const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

const  baseURL  = '/api/messages/';
app.get(baseURL, messages.read)
app.post(baseURL, messages.create)
app.put(`${baseURL}:id`, messages.update)
app.delete(`${baseURL}:id`, messages.delete)

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

