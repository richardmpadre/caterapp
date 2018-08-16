import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventNewComponent } from './events/event-new.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
