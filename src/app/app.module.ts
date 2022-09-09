import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { MenouComponent } from './menou/menou.component';

@NgModule({
  declarations: [
    AppComponent,
    Option1Component,
    Option2Component,
    Option3Component,
    MenouComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
