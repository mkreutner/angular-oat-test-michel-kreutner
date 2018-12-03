import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { OATUser } from '../../models';
import { userAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectUserState: MemoizedSelector<object, State> = createFeatureSelector<State>('user');

export const selectUserItems: (state: object) => OATUser[] = userAdapter.getSelectors(selectUserState).selectAll;

export const selectUserByUserId = (id: number) => createSelector(selectUserItems, (allUsers: OATUser[]) => {
  if (allUsers) {
    return allUsers.find((p: OATUser) => p.userId === id);
  } else {
    return null;
  }
});

export const selectUserError: MemoizedSelector<object, any> = createSelector(selectUserState, getError);

export const selectUserIsLoading: MemoizedSelector<object, boolean> = createSelector(selectUserState, getIsLoading);
