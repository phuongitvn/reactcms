var React = require('react');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var HeaderApp = require('./HeaderApp.react');
var AsideApp = require('./AsideApp.react');
var BodyApp = require('./BodyApp.react');
var MainApp = React.createClass({
	render: function(){
		return (
				<div>
					<HeaderApp/>
					<AsideApp/>
					<BodyApp>
					{this.props.children}
					</BodyApp>
				</div>
			);
	}
});
module.exports = MainApp;