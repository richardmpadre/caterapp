import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './events/event-list.component';
import { EventNewComponent } from './events/event-new.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventTypeComponent } from './admin/event-type/event-type.component';
import { NewEventTypeComponent } from './admin/event-type/new-event-type.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/new', component: EventNewComponent },
  { path: 'events/details/:id', component: EventDetailsComponent },

  // admin functions
  { path: 'admin/event-types', component: EventTypeComponent },
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
