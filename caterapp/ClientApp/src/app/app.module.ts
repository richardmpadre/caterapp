import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventNewComponent } from './events/event-new.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UiModule
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
