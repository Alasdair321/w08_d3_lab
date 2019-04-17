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

    // show(id)
    router.get('/:id', (req, res)=>{
        const id = req.params.id;
        collection
        .findOne({_id: ObjectID(id)})
        // .toArray() WHY DOES THIS NOT NEED .toArray???
        .then((docs)=>{res.json(docs)})
        .catch((err)=>{
            res.status(500);
            res.json({status: 500, error: err});
        });
    })


    // create



    // delete(id)



    // delete(all)



    // update
    return router;
};

module.exports = createRouter;