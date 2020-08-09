import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { RealtimeThoughts } from '../collections/message.js';
import 'moment';
import 'moment/dist/moment.js'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './main.html';
import '../lib/routes';


Meteor.subscribe('messages');

Template.base.events({
    'click .login' () {
        Meteor.loginWithDiscord();
    },
    'click .logout' () {
        Meteor.logout();
    },
    'submit .realtimeThoughtForm' (event) {
        event.preventDefault();
        const target = event.target;
        const captureText = target.text.value;
        const captureAuthor = Meteor.userId();

        const markDate = moment().format('YYYYMMDD');

        const d = new Date()

        const plainDate = moment().format(' h:mm a');

        RealtimeThoughts.insert({
            text: captureText,
            author: captureAuthor,
            date: markDate,
            sortDate: d,
            momentDate: plainDate
        });

        document.getElementById("realtimeForm").reset();

    }
})

Template.base.helpers({
    username: function (){
        return Meteor.user();
    },
    realtimeFeed: function (){
        let user = Meteor.userId();
      return RealtimeThoughts.find({author: user, date: moment().format("YYYYMMDD")}, {sort: {sortDate: -1}});
    }
});

