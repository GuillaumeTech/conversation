import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Message from './Message'
import assert from "assert"



if (Meteor.isClient) {
describe("Message box props", function () {
  it("text pass correctly ", async function () {
    const { container } = render(
      <Message x='100' y='100' text='test' date={new Date()} />
    )
    const message = container.firstChild
    assert.strictEqual(message.textContent, "test");
  });
});
}
