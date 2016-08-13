import {Component} from 'angular2/core';

@Component({
    selector: 'ngstyle',
    template: `
    <button [ngStyle]="{
    backgroundColor: canSave ? 'blue' : 'gray',
    color: canSave ? 'white' : 'black',
    fontWeight: canSave ? 'bold' : 'normal'
    }">Submit</button>
    `
})

export class NgStyleComponent {
    canSave = false;
}
