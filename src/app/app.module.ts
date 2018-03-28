import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//csv 추가를 위한 모듈
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    CsvUploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PapaParseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
