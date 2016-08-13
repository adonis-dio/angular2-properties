import {Component, Input} from 'angular2/core';

@Component({
    selector: 'favoritebtn',
    template: `
    <i class="glyphicon" (click)="favorite()" 
    [ngClass]="{
    'glyphicon-star': isActive,
    'glyphicon-star-empty' : !isActive
    }"></i>
    `
})

export class FavoriteComponent {
    @Input() isActive = false;

    favorite() {
        this.isActive = !this.isActive;
    }
}
