import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const show = createAction(
  '[Loader] Show'
);
export const hide = createAction(
  '[Loader] Hide'
);

export const handle = createAction(
  '[HTTP] handle',
  props<{ errorResponse: HttpErrorResponse }>()
);