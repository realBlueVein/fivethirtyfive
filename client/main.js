import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



import './main.html';
import '../lib/routes';



Template.base.events({
    'click .login' () {
        Meteor.loginWithDiscord();
    },
    'click .logout' () {
        Meteor.logout();
    }
})

Template.base.helpers({
    username: function (){
        return Meteor.user();
    }
});