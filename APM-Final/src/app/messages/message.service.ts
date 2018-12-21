import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: string[] = [];
  isDisplayed = false;

  get messages(): string[] {
    return this._messages;
  }

  constructor() {
    // Prevent update of messages (immutable)
    Object.freeze(this.messages);
  }

  addMessage(message: string): void {
    const currentDate = new Date();

    // Create a new array and add the item to it
    const newMessages = [...this.messages];
    newMessages.unshift(message + ' at ' + currentDate.toLocaleString());

    // Set the original array to this new array
    this._messages = newMessages;
  }
}
