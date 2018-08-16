import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './events/event-list.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  // initialized router
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {

}
