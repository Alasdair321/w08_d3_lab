const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function(url){
  this.url = url;
  this.request = require new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function(){

};

BucketList.prototype.getData = function(){
 // HERE IS A COMMENT
};

module.exports = BucketList;
