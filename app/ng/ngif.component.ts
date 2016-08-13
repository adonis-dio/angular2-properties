import {Component} from 'angular2/core';

@Component({
    selector: 'ngif',
    template: `
    <div *ngIf="show == 1">Content</div>
    `
})

export class NgIfComponent {
    show = 1;
}