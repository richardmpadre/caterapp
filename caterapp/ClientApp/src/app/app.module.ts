import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { HttpClientModule } from '@angular/common/http';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { EventNewComponent } from './events/event-new.component';
import { UiModule } from './ui/ui.module';
import { EventService } from './shared/event.service';
import { EventDetailsComponent } from './events/event-details.component';
import { EventTypeComponent } from './admin/event-type/event-type.component';
import { NewEventTypeComponent } from './admin/event-type/new-event-type.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,

    HttpClientModule,

    CalendarModule.forRoot(),
    FlatpickrModule.forRoot(),

    // angular material imports
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [EventService],
  declarations: [
    AppComponent,
    EventListComponent,
    EventNewComponent,
    EventDetailsComponent,
    EventTypeComponent,
    NewEventTypeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
