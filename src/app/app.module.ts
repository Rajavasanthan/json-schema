import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { LisJsonComponent } from './lis-json/lis-json.component';
import { ViewjsonComponent } from './viewjson/viewjson.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    LisJsonComponent,
    ViewjsonComponent
  ],
  imports: [ 
    BrowserModule,NgJsonEditorModule,MatDividerModule,MatListModule,MatToolbarModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
