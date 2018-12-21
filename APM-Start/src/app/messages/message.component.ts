import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from './message.service';

@Component({
  templateUrl: './message.component.html',
  styles: [
    '.message-row { margin-bottom: 10px }'
  ]
})
export class MessageComponent {
  get messages() {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService,
              private router: Router) { }

  close(): void {
    // Close the popup.
  }
}
