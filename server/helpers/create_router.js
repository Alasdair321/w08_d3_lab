const express = require('express');
const ObjectID = require('mongoDB').ObjectID;

const createRouter = function (collection){
    const router = express.Router();

    // index
    router.get('/', (req, res)=>{
        collection.find().toArray()
        .then((docs)=>{res.json(docs)})
        .catch((err)=>{
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

}