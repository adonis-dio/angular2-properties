import {Component} from 'angular2/core';

@Component({
    selector: 'ngfor',
    template: `
    <ul>
       <li *ngFor="#course of courses, #i = index">
       {{ i + 1 }} - {{ course }}
       </li>
    </ul>`
})

export class NgForComponent {
    courses = ["course1", "course2","course3"];
}