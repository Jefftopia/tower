import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SUPPORT_TEL_NO } from 'core/constants';

export interface IMessageFields {
    headline: string;
    message: string;
    subhead?: string;
    supportNumber: number;
    supportSMS: number;
    numberCTA: string;
    smsCTA: string;
    supportID?: number;
}

@Component({
    selector: 'tower-downtime-base',
    styleUrls: [
        './base.scss'
    ],
    templateUrl: './base.html'
})
export class DowntimeBase implements IMessageFields {
    public headline: string = 'We’re getting updated.';
    public message: string = `The good news is that this is just regular (and necessary) maintenance. And it’ll be complete soon. You can also
    reach out to talk, chat, ask, rant or rave at any time.`;
    public subhead: string = `We're standing by, ready to hear from you:`;
    public supportNumber: number = SUPPORT_TEL_NO;
    public supportSMS: number = SUPPORT_TEL_NO;
    public numberCTA: string = 'Call Us';
    public smsCTA: string = 'Text US';

    public suppoortID: string = undefined;

    constructor(route: ActivatedRoute) {
        Object.assign(this, route.snapshot.data);
    }
}
