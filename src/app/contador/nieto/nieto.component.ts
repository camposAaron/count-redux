import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from 'src/app/app.reducers';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador$ ?: Observable<number>;
  
  constructor(private store:Store<AppStore>) {}

  ngOnInit(): void {
    this.contador$ = this.store.select("count");   
  }

  reset(){
    this.store.dispatch(reset());
  }

}