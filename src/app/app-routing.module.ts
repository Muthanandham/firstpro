import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { UpComponent } from './common/up/up.component';

import { SecondComponent } from './second/second.component';
import { RecentComponent } from './recent/recent.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { UseComponent } from './use/use.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  { path: 'app-use', component: UseComponent },
  { path: 'app-recent', component: RecentComponent },
  { path: 'app-second', component: SecondComponent },
  { path: 'app-upcoming', component: UpcomingComponent },
  // { path: 'app-second', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
