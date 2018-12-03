import { Actions, ActionTypes } from './actions';
import { userAdapter, initialState, State } from './state';

export function userReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.USER_GET_ALL_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.USER_GET_ALL_SUCCESS:
      return userAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.USER_GET_ALL_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };

    case ActionTypes.USER_GET_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.USER_GET_SUCCESS:
      return userAdapter.upsertOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.USER_GET_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };

    default: {
      return state;
    }
  }
}
