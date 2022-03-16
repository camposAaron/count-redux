import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment } from './contador/contador.actions';
import { AppStore } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo_ngrx';

  count$: Observable<number>;

  constructor(private store : Store<AppStore>){
    // TODO: connect  `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }

  incrementar(){
    // ++this.contador;
    this.store.dispatch(increment());
  }

  decrementar(){
    // --this.contador;
    this.store.dispatch(decrement());
  }


}
