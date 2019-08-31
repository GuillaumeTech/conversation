import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('messages', function messagesPublication() {
      return Messages.find();
    });
  }


Meteor.methods({
    'messages.insert'(text,x,y,createdAt) {
      check(text, String);
      check(x, Number);
      check(y, Number);
      check(createdAt, Date);


   
      Messages.insert({
        text: text,
        x: x,
        y: y,
        createdAt: createdAt
      });
    }
  });
