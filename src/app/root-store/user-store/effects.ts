import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { UserService } from '../../services';
import * as userActions from './actions';
import { OATUser } from '../../models';

@Injectable()
export class UserStoreEffects {
  constructor(private userService: UserService, private actions$: Actions) { }

  @Effect()
  getAllRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.UserGetAllRequestAction>(
      userActions.ActionTypes.USER_GET_ALL_REQUEST
    ),
    switchMap(action =>
      this.userService.getAll()
        .pipe(
          map((items: OATUser[]) =>
            new userActions.UserGetAllSuccessAction({ items })
          ),
          catchError(error =>
            observableOf(new userActions.UserGetAllFailureAction({ error }))
          )
        )
    )
  );

  @Effect()
  getDetailsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.UserGetRequestAction>(
      userActions.ActionTypes.USER_GET_REQUEST
    ),
    switchMap(action =>
      this.userService.get(action.payload.userId)
        .pipe(
          map((item: OATUser) =>
            new userActions.UserGetSuccessAction({ item })
          ),
          catchError(error =>
            observableOf(new userActions.UserGetFailureAction({ error }))
          )
        )
    )
  );
}
