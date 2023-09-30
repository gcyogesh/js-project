import app from './app.js';

let page = document.getElementById('root').getAttribute('page-name');
document.getElementById("root").innerHTML = app(page);