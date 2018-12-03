import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'oat-dialog-not-yet-implemented',
  templateUrl: './not-yet-implemented.component.html',
  styleUrls: ['./not-yet-implemented.component.scss']
})
export class DialogNotYetImplementedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogNotYetImplementedComponent>,
  ) { }

  ngOnInit() { }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
