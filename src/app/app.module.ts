import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'

import { BsDropdownModule } from 'ngx-bootstrap'


import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
