const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function(){
  PubSub.subscribe('FormView:Submitted', (evt)=>{
    this.postItem(evt.detail); // create
  });
  PubSub.subscribe('ListView:deleteitem', (evt)=>{
    this.deleteItem(evt.detail);
  });
  PubSub.subscribe('ListView:edititem', (evt)=>{
    this.editItem(evt.detail);
  });
  PubSub.subscribe('ListView:completeitem', (evt)=>{
    const id = evt.detail.id;
    const payload = evt.detail.isComplete;
    this.completeItem(evt.detail);
  })
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then((bucketlist) => {
      PubSub.publish('BucketList:list-data', bucketlist);
    })
    .catch(console.error);
};

BucketList.prototype.postItem = function (item) {
  this.request.post(item)
    .then((items) => {
      PubSub.publish('BucketList:list-data', items);
    })
    .catch(console.error);
};

BucketList.prototype.deleteItem = function (itemID) {
  this.request.delete(itemID)
    .then((items) => {
      PubSub.publish('BucketList:list-data', items);
    })
    .catch(console.error);
};

BucketList.prototype.completeItem = function(itemID, isComplete) {
  this.request.put(itemID, isComplete)
  .then((items)=>{
    PubSub.publish('BucketList:list-data', items)
  })
  .catch(console.error);
}

module.exports = BucketList;
