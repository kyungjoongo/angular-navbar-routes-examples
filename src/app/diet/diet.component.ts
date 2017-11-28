import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-diet',
    /*templateUrl: './diet.component.html',*/
    template: `

        <h1>HelloWorld</h1>

        <table class="table table-responsive">
            <thead class="table-inverse">
            <tr>
                <th>name</th>
                <th>username</th>
                <th>email</th>

            </tr>
            </thead>
            <tr *ngFor="let user of users">

                <td class="">
                    {{user.name}}
                </td>
                <td class="">
                    {{user.username}}
                </td>

                <td class="">
                    {{user.email}}
                </td>


            </tr>
        </table>




    `,
    styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit {

    users: any[];

    constructor(public dataService: DataService) {

        this.dataService.getUsers().subscribe(users => {
            console.log(users);
            this.users = users;
        })


    }

    ngOnInit() {
    }

}
