import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { RootStoreState, UserStoreSelectors } from '../../../root-store';
import { UserGetRequestAction } from '../../../root-store/user-store/actions';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { OATUser } from '../../../models';
import { startWith, filter, first, last, skipWhile, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'oat-dialog-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class DialogUserDetailsComponent implements OnInit, OnDestroy {

  // Observable
  userItem$: Observable<OATUser> = null;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  // Data
  userItem: OATUser;
  userPicture = "url('/assets/images/undefined.png')";
  error: string;
  isLoading: boolean;

  // Subscriptions
  subscribeUser: Subscription;
  subscribeIsLoading: Subscription;
  subscribeError: Subscription;

  constructor(
    private store$: Store<RootStoreState.State>,
    public dialogRef: MatDialogRef<DialogUserDetailsComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit() {
    this.store$.dispatch(new UserGetRequestAction({ userId: this.data.userId }));
    this.userItem$ = this.store$.select(
      UserStoreSelectors.selectUserByUserId(this.data.userId)
    );
    this.subscribeUser = this.userItem$
      .pipe(
        startWith(null),
        filter(userItem => userItem !== null && userItem !== undefined)
      )
      .subscribe(userItem => {
        this.userItem = userItem;
        this.userPicture = `url('/assets/images/${this.userItem.gender}.png')`;
      })
  }

  ngOnDestroy() {
    this.subscribeUser && this.subscribeUser.unsubscribe();
  }

  onCancelClick(): void {
    this.dialogRef.close({ choice: false, data: this.data.row });
  }

  onValidateClick(): void {
    this.dialogRef.close({ choice: true, data: this.data.row });
  }
}
