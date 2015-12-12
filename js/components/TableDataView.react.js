var React = require('react');
var InboxApiUtils = require('../utils/InboxApiUtils');
var InboxActionCreator = require('../actions/InboxActionCreators');
var PaginationView = require('./PaginationView.react');
var Tablerow = React.createClass({
    render: function(){
        return (
            <tr>
				<td>{this.props.id}</td>
				<td>{this.props.user_phone}</td>
				<td>{this.props.transaction}</td>
				<td>{this.props.channel}</td>
				<td>{this.props.obj1_name}</td>
				<td>{this.props.created_time}</td>
			</tr>
        );
    }
});

var TableDataView = React.createClass({
	getInitialState: function(){
		return {
			currPage: 1,
		};
	},
	_onChange: function(){
		InboxApiUtils.loadData(this.state.currPage);
	},
	_gotoPage: function(n){
		InboxApiUtils.loadData(n);
		this.setState({
			currPage: n
		});
	},
	setPage: function(page){
		this.setState({
			pageNumber:page
		});
	},
	_onReload: function(){
		InboxApiUtils.loadData(this.state.currPage);
	},
	render: function(){
		/*var data = [
					      {
					        id: 'm_1',
					        name: 'Bill',
					        gender: 'Hey Jing, want to give a Flux talk at ForwardJS?',
					      },
					      {
					        id: 'm_2',
					        name: 'Jing and Bill',
					        gender: 'Bill',
					      }
				      ];*/
      	
		var data = this.props.data;
		var TableRowList='';
		if(typeof data.map =="function"){
				var TableRowList = data.map(function(objectProps){
	            return <Tablerow {...objectProps} key={objectProps.id} />
	        });
		}
		
        //var TableRowList='';
		return (
				<div className="jarviswidget jarviswidget-color-greenDark" data-widget-editbutton="false">
				<header>
					<span className="widget-icon"> <i className="fa fa-table"></i> </span>
					<h2>No Padding </h2>
					<button onClick={this._onChange} >Refesh</button>
				</header>
				<div>

					<div className="jarviswidget-editbox">

					</div>

					<div className="widget-body no-padding">

						<div className="alert alert-info no-margin fade in">
							<button className="close" data-dismiss="alert">
								×
							</button>
							<i className="fa-fw fa fa-info"></i>
							Adds zebra-striping to table row within <code>&lt;table&gt;</code> by adding the <code>.table-striped</code> with the base class
						</div>
						<div className="table-responsive">
								
							<table className="table table-bordered table-striped">
								<thead>
									<tr>
										<th>ID</th>
										<th>User Phone</th>
										<th>Transaction</th>
										<th>Channel</th>
										<th>Name</th>
										<th>Created time</th>
									</tr>
								</thead>
								<tbody>
									{TableRowList}
								</tbody>
							</table>
							<div className="dt-toolbar-footer">
								<div className="dataTables_paginate paging_simple_numbers" id="datatable_fixed_column_paginate">
									<ul className="pagination pagination-sm">
										<PaginationView onGotoPage={this._gotoPage}/>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			);
	}
});
module.exports = TableDataView;