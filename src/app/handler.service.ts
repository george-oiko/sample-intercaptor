import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { handle, hide, show } from './actions/loader.actions';
import { State } from './actions/loader.reducer';


@Injectable({
  providedIn: 'root'
})
export class HandlerService implements HttpInterceptor {

  constructor(private store: Store<State>) {
  }


  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //loader-service
    this.store.dispatch(show());
    
    return next.handle(req).pipe(
      //loader-service
      tap(() => this.store.dispatch(hide())),
      catchError((error: HttpErrorResponse) => {
        //error-service1 state

        //error-service2 handler
        this.store.dispatch(handle({errorResponse: error}));
        return throwError(error);
      })
    );
  }
}
