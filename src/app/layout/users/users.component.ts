import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootStoreState, UserStoreSelectors, UserStoreActions } from '../../root-store';
import { OATUser, defaultUser } from '../../models';
import { TablesConfig, defaultActionButtons } from '../../modules/tables/tables.interface';
import { MatDialog } from '@angular/material';
import { DialogUserDetailsComponent } from '../../modules/dialog/user-details/user-details.component';
import { DialogNotYetImplementedComponent } from '../../modules/dialog/not-yet-implemented/not-yet-implemented.component';
import { DialogConfirmComponent } from '../../modules/dialog/confirm/confirm.component';

@Component({
  selector: 'oat-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // Observables
  userItems$: Observable<OATUser[]> = null;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  // Configure users tables
  configUsers: TablesConfig = {
    displayedColumns: ['firstName', 'lastName'],
    columnsName: ['First Name', 'Last Name'],
    withFilter: true,
    pageSize: 10,
    withActions: true,
    actions: [],
    withHeaderAction: true,
    headerAction: defaultActionButtons,
  };

  userItems: OATUser[];
  error: string;
  isLoading: boolean;

  // Subscriptions
  subscribeIsLoading: Subscription;
  subscribeError: Subscription;

  /**
   * Constructor with DI
   * @param store$: root redux store
   */
  constructor(
    private store$: Store<RootStoreState.State>,
    public dialog: MatDialog
  ) { }

  /**
   * Override OnInit
   */
  ngOnInit(): void {
    // Listen and retreive userItems from store
    this.userItems$ = this.store$.select(
      UserStoreSelectors.selectUserItems
    ).pipe(map((s: OATUser[]) => s.filter((e: OATUser) => e.firstName !== '' && e.lastName !== '')));
    // Listen and retreive error status about user items from store
    this.error$ = this.store$.select(
      UserStoreSelectors.selectUserError
    );
    // Listen and retreive pending retreive status about user items from store
    this.isLoading$ = this.store$.select(
      UserStoreSelectors.selectUserIsLoading
    );
    // Distpatch action to retreive user items
    this.store$.dispatch(
      new UserStoreActions.UserGetAllRequestAction
    );

    // Subscribe to isLoading and error observable
    this.subscribeIsLoading = this.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.subscribeError = this.error$.subscribe(error => {
      this.error = error;
    });

    // Add setting on Users table
    this.configUsers.headerAction = {
      action: this.handleAddNewUser.bind(this), icon: 'add_circle_outline', tooltip: 'Add New User'
    };
    this.configUsers.actions = [
      { action: this.handleEditUser.bind(this), icon: 'contacts', tooltip: 'View/Edit User' },
      { action: this.handleDeleteUser.bind(this), icon: 'delete', tooltip: 'Delete User' },
    ];
  }

  /**
   * Override OnDestroy
   */
  ngOnDestroy(): void {
    // Unsubscribe subscription.
    this.subscribeError && this.subscribeError.unsubscribe();
    this.subscribeIsLoading && this.subscribeIsLoading.unsubscribe();
  }

  /** Customs methodes **/
  /**
   * Add new User
   * @param row
   */
  handleAddNewUser() {
    const dialogRef = this.dialog.open(DialogNotYetImplementedComponent, {
      width: '250px',
      data: defaultUser
    });

    // dialogRef.afterClosed().subscribe(() => { });
  }

  /**
   * Edit User
   * @param row
   */
  handleEditUser(row) {
    const dialogRef = this.dialog.open(DialogUserDetailsComponent, {
      width: '500px',
      data: row
    });
  }

  /**
   * Delete User
   * @param row
   */
  handleDeleteUser(row: OATUser) {
    const comment = `You will delete user <b>${row.firstName} ${row.lastName}</em>`;
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: {
        row: row,
        comment: comment
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.choice === true) {
        // ToDo: call web service to delete user profile
      }
    });
  }
}
