import { Meteor } from 'meteor/meteor';
import {Messages} from '../imports/api/messages';


function insertMessage(text, x, y) {
  Messages.insert({ text:text, x:x, y:y, createdAt: new Date(), color: color });
}

Meteor.startup(() => {
  // If the Message collection is empty, add some data.
  if (Messages.find({}).count() === 0) {
    insertMessage(
      'Who are you ?',
      50,
      70
    );

    insertMessage(
      'No one',
      300,
      500
    );
  }
});
