const express = require('express');
const ObjectID = require('mongoDB').ObjectID;

const createRouter = function (collection){
    const router = express.Router();

    // index
    router.get('/', (req, res)=>{
        //ORGANIZE DATA BY COMPLETION AND THEN DATE
        collection.find().toArray()
        .then((docs)=>{res.json(docs)})
        .catch((err)=>{
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

    // show(id)
    router.get('/:id', (req, res)=>{
        const id = req.params.id;
        collection
        .findOne({_id: ObjectID(id)})
        .then((docs)=>{res.json(docs)})
        .catch((err)=>{
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

    // create
    router.post('/', (req, res)=>{
        const newData = req.body;
        collection.insertOne(newData)
        .then(() => collection.find().toArray())
        .then(docs => res.json(docs))
        .catch((err)=>{
            res.status(500);
            res.json({status: 500, error: err});
        });
    });


    // delete(id)
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({_id: ObjectID(id)})
        .then(() => collection.find().toArray())
        .then(docs => res.json(docs))
        .catch((err)=>{
            res.status(500);
            res.json({status: 500, error: err});
        });
    })

    // update

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
        .updateOne({_id: ObjectID(id)},{$set: updatedData})
        .then(() => collection.find().toArray())
        .then(docs => res.json(docs))
        .catch((err)=>{
            res.status(500);
            res.json({status: 500, error: err});
        });
    })

    return router;
};

module.exports = createRouter;
// comment 