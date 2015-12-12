var React = require('react');
var MainApp = require('./components/MainApp.react');
var InboxPage = require('./components/InboxPage.react');
var DashboardPage = require('./components/DashboardPage.react');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var createHistory = require('history').createHistory;
var useBasename = require('history').useBasename;

const history = useBasename(createHistory)({
  basename: ''
})
console.log('app.js');
React.render(
	<Router history={history}>
	    <Route path="/" component={MainApp}>
	    	<Route path="inbox" component={InboxPage}/>
	    	<Route path="/dashboard" component={DashboardPage}/>
	    </Route>  	
  	</Router>,
	document.getElementById('body'));