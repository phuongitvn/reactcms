var React = require('react');
var BodyApp = React.createClass({
	render: function(){
		return (
				<div id="main" role="main">
					<div id="ribbon">
						<span className="ribbon-button-alignment"> 
							<span id="refresh" className="btn btn-ribbon" data-action="resetWidgets" data-title="refresh" rel="tooltip" data-placement="bottom" data-original-title="&lt;i className=&#39;text-warning fa fa-warning&#39;&gt;&lt;/i&gt; Warning! This will reset all your widget settings." data-html="true" data-reset-msg="Would you like to RESET all your saved widgets and clear LocalStorage?"><i className="fa fa-refresh"></i></span> 
						</span>
						<ol className="breadcrumb"><li>Home</li><li>Tables</li><li>Normal Tables</li></ol>
					</div>
					<div id="content" style={{opacity: 1}}>
						{this.props.children}
					</div>
				</div>
			);
	}
});
module.exports=BodyApp;