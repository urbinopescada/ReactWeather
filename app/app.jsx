var React = require('react');
var ReactDOM = require('react-dom');

/* //New sintax for
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory; */
//var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

//Load foundation using the css laoder (ie: css!) and inject the styles into our html, we do that chaining the loaders
require('style!css!foundation-sites/dist/css/foundation.min.css')
//Fire up foundation
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="examples" component={Examples}></Route>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
