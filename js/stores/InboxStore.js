var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var InboxConstants = require('../constants/InboxConstants');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

// Internal object of inbox
var _inbox = {};

// Method to load inbox from action data
function loadInboxFromServer(data){
  _inbox = data;
}
var InboxStore = assign({}, EventEmitter.prototype, {
	/**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getData: function() {
    return _inbox;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }	
});

// Register dispatcher callback
Dispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case InboxConstants.ActionTypes.CREATE_DATA:
      //create and reaload inbox data
      loadInboxFromServer(action.data);
      break;
    case InboxConstants.ActionTypes.RECEIVE_RAW_DATA:
      // Call internal method based upon dispatched action
      loadInboxFromServer(action.data);
      break;
    default:
      return true;
  }
  // If action was acted upon, emit change event
  InboxStore.emitChange();
  return true;
});
module.exports = InboxStore;