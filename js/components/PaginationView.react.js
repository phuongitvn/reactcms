var React = require('react');
var InboxApiUtils = require('../utils/InboxApiUtils');
var ItemPage = React.createClass({
	_onClick: function(){
		console.log('ItemPage->_handleClick->'+this.props.number);
		//this.props._onClickPage(this.props.number);
		//InboxApiUtils.loadData(this.props.number);
		this.props._onClickPage(this.props.number);
	},
	render: function(){
		var classN = this.props.active?"paginate_button active":"paginate_button ";
		return (
				<li className={classN} aria-controls="datatable_fixed_column">
					<a href="javascript:;" onClick={this._onClick}>{this.props.number}</a>
				</li>
			);
	}
});
var paging = [1,2,3,4];

var PaginationView = React.createClass({
	getInitialState: function(){
		console.log('PaginationView->getInitialState');
		return {
			paging: paging,
			curpage: 1
		};
	},
	_handleClick: function(page){
		//todo
		this.setState({
			curpage: page
		});
		console.log('PaginationView page:'+page);
		this.props.onGotoPage(page);
	},
	_handleClickNext: function(){
		var nextPage = this.state.curpage+1;
		console.log('next page:'+nextPage);
		this.setState({
			curpage: nextPage
		});
		this.props.onGotoPage(nextPage);
	},
	_handleClickPrevious: function(){
		var previousPage = this.state.curpage-1;
		console.log('next page:'+previousPage);
		if(previousPage>1){
			this.setState({
				curpage: previousPage
			});
			this.props.onGotoPage(previousPage);
		}
	},
	render: function(){
		var active = this.state.curpage;
		var activeButtonPrevious = (this.state.curpage<=1)?"paginate_button previous disabled":"paginate_button previous";
		var itempage = this.state.paging.map(function(numberPage){
			var activedNumber = (active==numberPage)?true:false;
			return <ItemPage active={activedNumber} key={numberPage} number={numberPage} _onClickPage={this._handleClick} />
		},this);

		return (
				<ul className="pagination pagination-sm">
					<li className={activeButtonPrevious} aria-controls="datatable_fixed_column" id="datatable_fixed_column_previous">
						<a href="javascript:;" onClick={this._handleClickPrevious}>Previous</a>
					</li>
					{itempage}
					<li className="paginate_button next" aria-controls="datatable_fixed_column" id="datatable_fixed_column_next">
						<a href="javascript:;" onClick={this._handleClickNext}>Next</a>
					</li>
				</ul>
			);
	}
});
module.exports = PaginationView;