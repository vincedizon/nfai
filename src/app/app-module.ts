import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app'; 
import { HomeComponent } from './home/home';
import { PartnersComponent } from './partners/partners';
import { AboutComponent } from './about/about';
import { JoinUsComponent } from './join-us/join-us';

import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    App,
    HomeComponent,
    PartnersComponent,
    AboutComponent,
    JoinUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App] // Matches the declaration above
})
export class AppModule { }

