import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
