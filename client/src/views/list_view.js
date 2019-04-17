const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('../views/item_view.js');

const ListView = function(element){
  this.element = element;
};

ListView.prototype.bindEvents = function(){

  PubSub.subscribe('Bucketlist:list-data', (evt)=>{
    this.render(evt.detail);
  });

};

ListView.prototype.render = function (items) {
  this.element.innerHTML = '';
  const itemView = new ItemView(this.element);
  items.forEach( (item) => itemView.render(item) );
};

module.exports = ListView;
