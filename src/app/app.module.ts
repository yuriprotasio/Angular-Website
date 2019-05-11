import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'

import { BsDropdownModule } from 'ngx-bootstrap'


import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ServicesComponent } from './services/services.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ContactComponent } from './contact/contact.component'
import { ShouldHireComponent } from './should-hire/should-hire.component'

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
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    ShouldHireComponent
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
