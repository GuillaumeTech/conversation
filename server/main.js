import { Meteor } from 'meteor/meteor';
import { Messages } from '../imports/api/messages';
import { Temp } from '../imports/api/temp';


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
  if (Temp.find({}).count() === 0) {
    Temp.insert({ tempName: 'writingUsers', tempValue: 0 })
    Temp.insert({ tempName: 'activeUsers', tempValue: 0 })
  }
});


Meteor.onConnection((client) => {
  Temp.update(
    { tempName: 'activeUsers' },
    { $set: { tempValue: Meteor.default_server.stream_server.all_sockets().length } })

  client.onClose(() => {
    Temp.update(
      { tempName: 'activeUsers' },
      { $set: { tempValue: Meteor.default_server.stream_server.all_sockets().length } })
  })
})