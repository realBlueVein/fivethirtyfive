import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';


export const RealtimeThoughts = new Mongo.Collection('realtimeThoughts');

RealtimeThoughts.allow({
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


