import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [HomeService],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class HomeModule { }
