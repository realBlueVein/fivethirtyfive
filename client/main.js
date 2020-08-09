import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../collections/message.js';
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
    'submit .messageForm' (event) {
        event.preventDefault();
        const target = event.target;
        const text = target.text.value;
        const author = Meteor.userId();

        const d = new Date();
        const date = d.toISOString();

        message.insert({
            text: this.text,
            author: this.author,
            date: this.date
        })

    }
})

Template.base.helpers({
    username: function (){
        return Meteor.user();
    }
});

