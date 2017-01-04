import { Component } from '@angular/core';

import { MessageService } from '../messages/message.service';

@Component({
    template: `
        <h4>Message Log</h4>
        <div *ngFor="let message of messageService.messages; let i=index">
            <div *ngIf="i<10" [ngClass]="{'alternate-row': i % 2 }">
                {{ message }}
            </div>
        </div>
    `,
    styles: [
        '.alternate-row { color: gray; }'
    ]
})
export class MessageComponent {

    constructor(private messageService: MessageService) { }

}
