import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { TranslateModule } from '@ngx-translate/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { TablesModule } from '../../modules/tables/tables.module';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatGridListModule,
    TranslateModule,
    TablesModule,
    MatCardModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule { }
