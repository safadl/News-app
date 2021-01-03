import {CHANGE_THEME} from '../actions/actions';

const initialState={
  Theme:false
};

export const mainReducer=(state=initialState,action)=>{
switch (action.type) {
  case CHANGE_THEME:
    return {...state,Theme:action.Theme}

  default:
    return state
}
}