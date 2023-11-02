import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { UpComponent } from './common/up/up.component';
import { BodyComponent } from './common/body/body.component';
import { DownComponent } from './common/down/down.component';

import { SecondComponent } from './second/second.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { RecentComponent } from './recent/recent.component';

import { UseComponent } from './use/use.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UpComponent,
    BodyComponent,
    DownComponent,

    SecondComponent,
    UpcomingComponent,
    RecentComponent,

    UseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
