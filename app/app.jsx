var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Todo = require('Todo');

import './../playground'

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Todo/>,
  document.getElementById('app')
);
