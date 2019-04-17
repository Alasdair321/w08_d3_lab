const PubSub = require('../helpers/pub_sub.js');

const ListView = function(element){
  this.element = element;
};

ListView.prototype.bindEvents = function(){
  PubSub.subscribe('BucketList:list-data', (evt)=>{
    this.render(evt.detail);
  });

  
};

ListView.prototype.render = function (items) {
  items.forEach( (item) => {
    this.element.innerHTML = `
    <img src="${item.image}" alt="${item.title} image">
    <h2>${item.title}</h2>
    <p>${item.deadline}</p>
    <button type="button" name="edit" value=${item._id}></button>
    <button type="button" name="delete" value=${item._id}></button>
  `;
  });
};

module.exports = ListView;
