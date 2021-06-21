import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandlerService } from './handler.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './actions/loader.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HandlerService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
