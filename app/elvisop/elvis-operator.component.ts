import {Component} from 'angular2/core';

@Component({
    selector: 'elvisop',
    template: `
    <ul>
    <li>Title: {{ task.title }}</li>
    <li>Assigned to: {{ task.assigned?.name }}</li>
</ul>
    `
})

export class ElvisOpComponent {
    task = {
        title: "Review apps",
        assignee: null
    }
}
