import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
/*import 'rxjs/add/operator/map'*/
import 'rxjs/add/operator/map'
import {timeout} from "rxjs/operator/timeout";

@Injectable()
export class DataService {

    constructor(public http: Http) {
    }

    getUsers() {


        return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => {
                return res.json()
        })


    }

}
