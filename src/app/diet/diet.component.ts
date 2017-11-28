import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-diet',
    /*templateUrl: './diet.component.html',*/
    template: `


        

        <section  *ngIf="showSpinner">
            <mat-progress-bar
                [color]="color"
                [mode]="mode"
                [value]="value"
                [bufferValue]="bufferValue">
            </mat-progress-bar>
        </section>


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
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    users: any[];
    showSpinner: boolean = false;

    constructor(public dataService: DataService) {

        this.showSpinner = true;

        this.dataService.getUsers().subscribe(users => {
            console.log(users);

            setTimeout(()=>{

                this.users = users;
                this.showSpinner= false;
            },1000)


        })


    }

    ngOnInit() {
    }

}
