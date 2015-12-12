var Dispatcher = require('../dispatcher/Dispatcher');
var InboxConstants = require('../constants/InboxConstants');

var ActionTypes = InboxConstants.ActionTypes;

module.exports = {

  loadInbox: function(rawData) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_RAW_DATA,
      data: rawData
    });
  },

  receiveCreatedData: function(createdData) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_RAW_CREATED_DATA,
      data: createdData
    });
  }

};
