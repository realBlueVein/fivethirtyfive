import { Meteor } from 'meteor/meteor';
import '../collections/message.js';



Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish('message', function(group) {
    if (this.userId) {
        return message.find({});
    }
});