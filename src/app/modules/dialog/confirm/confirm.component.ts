import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'oat-dialog-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  row: any;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.row = this.data;
  }

  onCancelClick(): void {
    this.dialogRef.close({ choice: false, data: this.row.row });
  }

  onValidateClick(): void {
    this.dialogRef.close({ choice: true, data: this.row.row });
  }
}
