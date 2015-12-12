var InboxActionCreators = require('../actions/InboxActionCreators');

module.exports = {
	loadData: function(page) {
        var pageNumber = (typeof page !== "undefined")?page:1;
        $.ajax({
        	//url:'http://localhost:8282/inboxApi.php',
            url: 'http://localhost:2985/apiInbox/loadData',
            data: {page:pageNumber},
        	type: 'get',
        	dataType: 'json',
            //async: false,
            crossDomain : true,
        	success: function(res){
        		// simulate success callback
        		InboxActionCreators.loadInbox(res.result);
        	}.bind(this),
        	error: function(){
        		console.log('load data error');
        	}.bind(this)
        })
    },
};