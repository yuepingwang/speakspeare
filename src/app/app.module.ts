import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';// mannually add a new module


import { AppComponent } from './app.component';
import { ScriptComponent } from './script/script.component';

@NgModule({
  declarations: [
    AppComponent,
    ScriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule// mannually add a new module
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
