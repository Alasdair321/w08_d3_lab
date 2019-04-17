const ButtonView = require('./views/button_view.js');
const ListView = require('./views/list_view.js');
const FormView = require('./views/form_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', ()=>{
  console.log('this happened')

  const listElement = document.querySelector('#bucket-list');
  const listView = new ListView(listElement);
  listView.bindEvents();

  const buttonElement = document.querySelector('#new-button');
  const buttonView = new ButtonView(buttonElement);
  buttonView.bindEvents();

  const formElement = document.querySelector('#bucket-form');
  const formView = new FormView(formElement);
  formView.bindEvents();

  const url = "http://localhost:3000/api/items";
  const bucketList = new BucketList(url);
  bucketList.bindEvents();

  bucketList.getData();
});
