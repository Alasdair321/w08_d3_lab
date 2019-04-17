const PubSub = require('../helpers/pub_sub.js');

const ItemView = function(element){
  this.element = element;
};

ItemView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.innerHTML = `
    <img class="bucket-image" src="${item.image}" alt="${item.title} image">
    <h2>${item.title}</h2>
    <p>${item.deadline}</p>
  `;

  const editButton = this.createEditButton(item._id);
  itemContainer.appendChild(editButton);

  const deleteButton = this.createDeleteButton(item._id);
  itemContainer.appendChild(deleteButton);

  this.element.appendChild(itemContainer)
};

ItemView.prototype.createEditButton = function (id) {
  const button = document.createElement('button');
  button.classList.add('ListView:delete-item');
  button.value = id;
  button.innerHTML = `
    <img src="images/edit.png" class="editbutton" alt="edit button">
  `;
  button.addEventListener('click', (evt) => {
    PubSub.publish('ListView:edit-item', evt.target.value);
  });

  return button;
};

ItemView.prototype.createDeleteButton = function (id) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = id;
  button.innerHTML = `
    <img src="images/delete.png" class="editbutton" alt="delete button">
  `;
  button.addEventListener('click', (evt) => {
    PubSub.publish('SightingView:sighting-delete-clicked', evt.target.value);
  });

  return button;
};

module.exports = ItemView;
