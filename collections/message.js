import SimpleSchema from 'simpl-schema';

let message = new Mongo.Collection('message');

message.allow({
    insert: function(userId, doc) {
        return true;
    },
    update: function(userId, doc) {
        return true;
    },
    remove: function(userId, doc) {
        return true;
    }
});


let messageMap = new SimpleSchema({
   text: {
       type: String
   },
    date: {
       type: String,
    },
    author: {
       type: String,
    }
});

