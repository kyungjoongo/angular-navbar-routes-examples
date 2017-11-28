import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {Test001Component} from './test001/test001.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes : Routes =[
  {path : '' , component : HomeComponent},
  {path : 'about' , component: AboutComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    Test001Component,
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
