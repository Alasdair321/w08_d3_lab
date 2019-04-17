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
  PubSub.subscribe('listView:completeitem', (evt)=>{
    this.completeItem(evt.detail);
  })
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then((bucketlist) => {
      PubSub.publish('Bucketlist:list-data', bucketlist);
    })
    .catch(console.error);
};

BucketList.prototype.postItem = function (item) {
  this.request.post(item)
    .then((items) => {
      PubSub.publish('Bucketlist:list-data', items);
    })
    .catch(console.error);
};

BucketList.prototype.deleteItem = function (itemID) {
  this.request.delete(itemID)
    .then((items) => {
      PubSub.publish('Bucketlist:list-data', items);
    })
    .catch(console.error);
};

BucketList.prototype.getData = function(){
 // HERE IS A COMMENT
};

module.exports = BucketList;


// Sightings.prototype.bindEvents = function () {
//   PubSub.subscribe('SightingView:sighting-delete-clicked', (evt) => {
//     this.deleteSighting(evt.detail);
//   });

//   PubSub.subscribe('SightingFormView:sighting-submitted', (evt) => {
//     this.postSighting(evt.detail);
//   })
// };

// Sightings.prototype.getData = function () {
//   this.request.get()
//     .then((sightings) => {
//       PubSub.publish('Sightings:data-loaded', sightings);
//     })
//     .catch(console.error);
// };

// Sightings.prototype.postSighting = function (sighting) {
//   this.request.post(sighting)
//     .then((sightings) => {
//       PubSub.publish('Sightings:data-loaded', sightings);
//     })
//     .catch(console.error);
// };

// Sightings.prototype.deleteSighting = function (sightingId) {
//   this.request.delete(sightingId)
//     .then((sightings) => {
//       PubSub.publish('Sightings:data-loaded', sightings);
//     })
//     .catch(console.error);
// };

// module.exports = Sightings;