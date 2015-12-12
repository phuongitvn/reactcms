var React = require('react');
var TableDataView = require('./TableDataView.react');
var InboxStore = require('../stores/InboxStore');
var InboxApiUtils = require('../utils/InboxApiUtils');


function getDataState(){
	return {
    	data: InboxStore.getData()
  };
}

var InboxPage = React.createClass({
	getInitialState: function(){
		console.log('InboxPage->getInitialState');
		return getDataState();
	},
	componentDidMount: function() {
		console.log('InboxPage->componentDidMount');
    	InboxStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		console.log('InboxPage->componentWillUnmount');
    	InboxStore.removeChangeListener(this._onChange);
  	},
  	_onChange: function(){
		this.setState(getDataState());
	},
	render: function(){

		console.log('InboxPage->render');
		return (
				<div>
				<h3>Inbox page</h3>
				<TableDataView data={this.state.data}/>
				</div>
			);
	}
});
InboxApiUtils.loadData();
module.exports = InboxPage;