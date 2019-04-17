const PubSub = require('../helpers/pub_sub.js');

const FormView = function(element){
  this.element = element;
};

FormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucketList = this.createItem(evt.target);
  PubSub.publish('FormView:Submitted', newBucketList);
  evt.target.reset();
};

FormView.prototype.createItem = function (form) {
  const newBucketList = {
    title: form.title.value,
    deadline: form.deadline.value,
    completed: form.completed.value,
    img: form.img.value
  };

  return newBucketList;
};

FormView.prototype.renderForm = function () {
  this.element.innerHTML = `
  <label for="title">Bucketlist Item</label>
<input type="text" name="title" id="title">
<label for="deadline">Deadline</label>
<input type="date" name="deadline" id="deadline">
<input type="hidden" name="completed" id="completed" value="false">
<label for="img">Image URL</label>
<input type="text" name="img" id="img">
<input type="submit" value="save" id="save">
  `
};



module.exports = FormView;
