import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './actions/loader.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'handling';

  loader: Observable<boolean> = this.store.pipe(select(s => s.loader));
  constructor(private http: HttpClient, private store: Store<State>) {
    this.store.subscribe(s => console.log(s));
  }

  ngAfterViewInit() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(res => console.log(res,''))
  }


}
