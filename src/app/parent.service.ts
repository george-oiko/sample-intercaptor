import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, tap } from 'rxjs/operators';
import { State } from './actions/loader.reducer';
import { HandlerService } from './handler.service';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient, private handler: HandlerService) { }

  post() {
    this.http.get('').pipe(
      tap(() => {
        console.log('');
      })
    );
  }
}
