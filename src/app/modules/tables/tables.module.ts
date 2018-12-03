import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { TablesComponent } from './tables.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    TranslateModule,
  ],
  declarations: [TablesComponent],
  exports: [TablesComponent]
})
export class TablesModule { }
