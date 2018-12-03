import { Action } from '@ngrx/store';
import { OATUser } from '../../models';

export enum ActionTypes {
  USER_GET_ALL_REQUEST = '[User] Get All Request',
  USER_GET_ALL_FAILURE = '[User] Get All Failure',
  USER_GET_ALL_SUCCESS = '[User] Get All Success',

  USER_GET_REQUEST = '[User] Get Request',
  USER_GET_FAILURE = '[User] Get Failure',
  USER_GET_SUCCESS = '[User] Get Success',
}

/** Get all users as list Actions */
/** Request */
export class UserGetAllRequestAction implements Action {
  readonly type = ActionTypes.USER_GET_ALL_REQUEST;
}
/** Failure response */
export class UserGetAllFailureAction implements Action {
  readonly type = ActionTypes.USER_GET_ALL_FAILURE;
  constructor(public payload: { error: string }) { }
}
/** Success response */
export class UserGetAllSuccessAction implements Action {
  readonly type = ActionTypes.USER_GET_ALL_SUCCESS;
  constructor(public payload: { items: OATUser[] }) { }
}

/** Get datail about user Actions */
/** Request: need to give userId as number */
export class UserGetRequestAction implements Action {
  readonly type = ActionTypes.USER_GET_REQUEST;
  constructor(public payload: { userId: number }) { }
}
/** Failure response */
export class UserGetFailureAction implements Action {
  readonly type = ActionTypes.USER_GET_FAILURE;
  constructor(public payload: { error: string }) { }
}
/** Success response */
export class UserGetSuccessAction implements Action {
  readonly type = ActionTypes.USER_GET_SUCCESS;
  constructor(public payload: { item: OATUser }) { }
}

export type Actions
  = UserGetAllRequestAction
  | UserGetAllFailureAction
  | UserGetAllSuccessAction
  | UserGetRequestAction
  | UserGetFailureAction
  | UserGetSuccessAction;
