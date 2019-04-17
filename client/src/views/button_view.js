const PubSub = require('../helpers/pub_sub.js');
const FormView = require('./button_view.js');

const ButtonView = function(element){
  this.element = element;
};

ButtonView.prototype.bindEvents = function(){
  this.element.innerHTML = `
  <input type="button" name="newbucketlist" value="New Item">
  `
  this.element.addEventListener('click', (evt)=>{
    FormView.renderForm();
  })
};

module.exports = ButtonView;
