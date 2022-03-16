import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './contador/counter.reducer';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count : counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge : 25,
      logOnly: environment.production,
      autoPause : false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
