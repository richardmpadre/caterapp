import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventNewComponent } from './events/event-new.component';
import { UiModule } from './ui/ui.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,

    CalendarModule.forRoot(),4

    // angular material imports
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    EventListComponent,
    EventNewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
