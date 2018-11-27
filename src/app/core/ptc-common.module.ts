import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service'
import { HttpConfig } from './config/http.config';
import { LoadingComponent } from './templates/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    HttpService,
    HttpConfig,
  ],
  exports :[
    LoadingComponent
  ]
})
export class PtcCommonModule { }
