import { LangModule } from 'projects/ngx-core/src/public-api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, LangModule],
  exports: [TableComponent],
  providers: []
})
export class TableModule {}
