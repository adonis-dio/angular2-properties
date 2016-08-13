/**
 * Created by adoni on 05/08/2016.
 */
import {Component} from "angular2/core";
import {ControlGroup, FormBuilder} from "angular2/common";

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'search',
    template: `
    <form [ngFormModel]="form">
        <input type="text" ngControl="search">
    </form>
    `
})

export class ObservableComponent {
    form:ControlGroup;

    //Search Observable
    constructor(fb:FormBuilder) {
        this.form = fb.group({
            search: []
        })

        var search = this.form.find('search')
        search.valueChanges.debounceTime(400).map(str => (<string>str).replace(' ', '-')).subscribe(x => console.log(x));
    }

    //Date Observable
/*
    var startDates = [];
    var startDate = new Date();

    for (var day = -2; day <= 2; day++) {
    var date = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + day);
    startDates.push(date);
    }

    var observable = Observable.fromArray(startDates)
        .map(date => { console.log("Getting deals for date " + date)
            return [1, 2, 3] }).subscribe(x => console.log(x));
*/

    //Timer Observable
    /*
    var observable = Observable.interval(5000);
    observable.map(x => {console.log("calling the server to get the latest news")return [1,2,3]}).subscribe(news => console.log(news));
    */

    //Timer Observable-
    /*
        var observable = Observable.interval(1000);
        observable.flatMap(x => { console.log("calling the server to get the latest news") return observable.of([1,2,3]); }).subscribe(news => console.log(news));
    */


/*
    var userStream = Observable.of({ userId:1, username: 'mosh' }).delay(2000);
    var tweetsStream = Observable.forkJoin(userStream, tweetsStream).map(joined => new Object({user: joined[0], tweets: joined[1] })).subscribe(result => console.log(result);
*/

    //observable.subscribe(x => console.log(x), error => console.error(error));

/*
    var observable = Observable.throw(new Error("Something failed."));
    observable.subscribe(x => console.error(error));
*/

/*
remoteDataStream = Observable.of([4,5,6]);

    remoteDataStream.catch(err => {var localDataStream = Observable.of([1,2,3])return localDataStream}).subscribe(x => console.log(x));
*/


/*
var remoteDataStream.timeout(1000).subscribe(x => console.log(x), error => console.error(error)) = Observable.of([1, 2, 3]).delay(5000);
*/

}