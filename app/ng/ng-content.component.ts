import {Component, Input} from 'angular2/core';

@Component({
    selector: 'bs-panel',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading">
            <ng-content selector=".heading"></ng-content>
        </div>
        <div class="panel-body">
            <ng-content select=".body"></ng-content>
        </div>
    </div>
    `
})

export class NgContentComponent {
}
