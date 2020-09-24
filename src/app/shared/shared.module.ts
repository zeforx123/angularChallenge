import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { SumPipe } from './pipes/sum/sum.pipe';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, TableComponent, SumPipe],
  exports: [FooterComponent, HeaderComponent, TableComponent, SumPipe],
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ]
})
export class SharedModule { }
