import {Component} from 'angular2/core';
import {SummaryPipe} from "./summary.pipe";

@Component({
    selector: 'pipes',
    template: `
    <h1>Regular Pipes</h1>
    {{ courses.title | uppercase }}<br>
    {{ courses.rating | number }}<br>
    {{ courses.students | number:'2.2-2' }}<br>
    {{ courses.price | currency:'BRL':true:'1.2-2' }}<br>
    {{ courses.date | date:'MMM yyyy' }}<br>
    {{ courses | json }}<br>
    <h1>Custom Pipes</h1>
    {{ post.title }}<br>
    {{ post.body | summary:10 }}
    `,
    pipes: [SummaryPipe]
})

export class PipesComponent {
    courses = {
        title: "Angular 2 for Beginners",
        rating: 5981,
        students: 4.9745,
        price: 9995,
        date: new Date()
    }
    post = {
        title: "Angular Tutoral for Beginners",
        body: `Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, 
        ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit 
        mauris vel metus. Aenean fermentum risus id tortor. Integer imperdiet lectus 
        quis justo. Integer tempor. Vivamus ac urna vel leo pretium`
    }
}