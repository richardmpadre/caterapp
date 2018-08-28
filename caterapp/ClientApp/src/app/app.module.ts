import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventNewComponent } from './events/event-new.component';
import { UiModule } from './ui/ui.module';
import { EventService } from './shared/event.service';
import { HttpClient } from 'selenium-webdriver/http';
import { EventDetailsComponent } from './events/event-details.component';


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
  ],
  providers: [ EventService],
  declarations: [
    AppComponent,
    EventListComponent,
    EventNewComponent,
    EventDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
