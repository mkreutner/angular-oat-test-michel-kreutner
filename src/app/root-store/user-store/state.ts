import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { OATUser } from '../../models';

export const userAdapter: EntityAdapter<OATUser> = createEntityAdapter<OATUser>({
  selectId: model => model.userId,
  sortComparer: (a: OATUser, b: OATUser): number => a.userId - b.userId
});

export interface State extends EntityState<OATUser> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = userAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
