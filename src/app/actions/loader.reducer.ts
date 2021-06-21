import { HttpErrorResponse } from "@angular/common/http";
import { Action, createReducer, on } from "@ngrx/store";
import { handle, hide, show } from "./loader.actions";

export interface State {
    loader: boolean;
    httpError: string;
  }

export const initialState: State = {
    loader: false,
    httpError: ''
  };

const loaderReducer = createReducer(
    initialState,


    on(show, state => ({ ...state, loader: true })),



    on(hide, state => ({ ...state, loader: false })),


    on(handle, (state, props) => ({ ...state, httpError: handleError(props.errorResponse) }))
  );

  function handleError(err: HttpErrorResponse): string {

    if(err.status === 400) {
      return 'error';
    }
      return 'error';
  }


  
  export function reducer(state: State | undefined, action: Action) {
    return loaderReducer(state, action);
  }

export interface LoadingScreen {
  screens: Loader[];
}

export interface Loader {
  uuid: string;
}

function generateGuid() {
  var result, i, j;
  result = '';
  for(j=0; j<32; j++) {
    if( j == 8 || j == 12 || j == 16 || j == 20)
      result = result + '-';
    i = Math.floor(Math.random()*16).toString(16).toUpperCase();
    result = result + i;
  }
  return result;
}