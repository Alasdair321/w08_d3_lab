const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');
const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

MongoClient.connect("mongodb://localhost:27017")
.then((client)=>{
    const db = client.db('bucketlist');
    const itemsCollection = db.collection('items');
    const itemsRouter = createRouter(itemsCollection);
    app.use('/api/items', itemsRouter);
}).catch(console.err);

// app.use??? does things which are indescribable
// body-parser extracts the entire body portion of an incoming request and exposes it on req.body
app.use(parser.json());

app.listen(3000, function (){
    console.log(`Listening on port: ${this.address().port}`);
});