const PubSub = require('../helpers/pub_sub.js');

const ItemView = function(element){
  this.element = element;
};

ItemView.prototype.render = function (items) {
  this.element.innerHTML = '';
  const itemView = new ItemView(this.container);
  items.forEach( (item) => itemView.render(item) );
};

module.exports = ItemView;




// items.forEach( (item) => {
//   this.element.innerHTML += `
//   <div>
//     <img src="${item.image}" alt="${item.title} image">
//     <h2>${item.title}</h2>
//     <p>${item.deadline}</p>
//     <button type="button" name="edit" value=${item._id}>Edit</button>
//     <button type="button" name="delete" value=${item._id}>Delete</button>
//   </div>
// `;
// });
