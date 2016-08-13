import {Component} from 'angular2/core';
import {NgIfComponent} from "./ng/ngif.component";
import {NgSwitchComponent} from "./ng/ngswitch.component";
import {NgForComponent} from "./ng/ngfor.component";
import {NgStyleComponent} from "./ng/ngstyle.component";
import {FavoriteComponent} from "./ng/ngclass.component";
import {ElvisOpComponent} from "./elvisop/elvis-operator.component";
import {PipesComponent} from "./pipes/pipes.component";
import {NgContentComponent} from "./ng/ng-content.component";
import {ObservableComponent} from "./observable/observable.component";
import {PostService} from "./post.service";
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {OnDestroy} from "angular2/core";


@Component({
    selector: 'my-app',
    template: `
    <!--
    <ngfor></ngfor>
    <ngif></ngif>
    <ngswitch></ngswitch>
    <ngstyle></ngstyle>
    <favoritebtn></favoritebtn>
    <pipes></pipes>
    <elvisop></elvisop>   
    <bs-panel>    
        <div  class="heading">this is the body!</div>
        <div  class="body">hi</div>
        <div  class="body">hi2</div>
    </bs-panel>
    <search></search>
    -->
    <div *ngIf="ifLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    `,
    directives: [ObservableComponent, NgIfComponent, NgForComponent, NgSwitchComponent, PipesComponent, FavoriteComponent, NgStyleComponent, ElvisOpComponent, NgContentComponent],
    providers: [PostService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    isLoading = true;

    constructor(private  _postService: PostService){
    }

    ngOnInit(){
        this._postService.getPosts()
            .then(posts => {
                this.isLoading = false;
                console.log(posts);
        });

    }
}