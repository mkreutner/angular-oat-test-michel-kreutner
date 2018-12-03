import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSliderModule, MatSlideToggleModule, MatButtonModule, MatIconModule, MatListModule
} from '@angular/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { TranslateModule } from '@ngx-translate/core';

import { DialogConfirmComponent } from './confirm/confirm.component';
import { DialogNotYetImplementedComponent } from './not-yet-implemented/not-yet-implemented.component';
import { DialogUserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,

    NgxMaterialTimepickerModule.forRoot(),

    TranslateModule,
  ],
  declarations: [
    DialogConfirmComponent,
    DialogNotYetImplementedComponent,
    DialogUserDetailsComponent
  ],
  entryComponents: [
    DialogConfirmComponent,
    DialogNotYetImplementedComponent,
    DialogUserDetailsComponent
  ]
})
export class DialogModule { }
