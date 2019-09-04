import { Mongo } from 'meteor/mongo';


export const Temp = new Mongo.Collection('temp');



if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('temp', function tempPublication() {
    return Temp.find();
  });
}


Meteor.methods({
  'temp.writing'() {
    Temp.update(
      { tempName: 'writingUsers' },
      { $inc: { tempValue: 1 } })
  },
  'temp.notWriting'() {
    Temp.update(
      { tempName: 'writingUsers' },
      { $inc: { tempValue: -1 } })
  }
})
