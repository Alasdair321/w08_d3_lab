const PubSub = require('../helpers/pub_sub.js');

const FormView = function(element){
  this.element = element;
};

FormView.prototype.bindEvents = function(){

};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = this.createSighting(evt.target);
  PubSub.publish('SightingFormView:sighting-submitted', newSighting);
  evt.target.reset();
};

SightingFormView.prototype.createSighting = function (form) {
  const newSighting = {
    species: form.species.value,
    location: form.location.value,
    date: form.date.value
  };

  return newSighting;
};

module.exports = FormView;
