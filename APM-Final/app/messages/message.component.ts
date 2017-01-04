import { Component } from '@angular/core';

import { MessageService } from '../messages/message.service';

@Component({
    template: `
        <h4>Message Log</h4>
        <div *ngFor="let message of messageService.messages; let i=index">
            <div *ngIf="i<10" class="message-row">
                {{ message }}
            </div>
        </div>
    `,
    styles: [
        '.message-row { margin-bottom: 10px }'
    ]
})
export class MessageComponent {

    constructor(private messageService: MessageService) { }

}
