import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/app.reducers';
import { divide, multiply } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador:number;

  constructor(private store: Store<AppStore>) { 
    this.contador = 0;
  }

  ngOnInit(): void {
    this.store.select("count").subscribe(  (contador:number) => this.contador = contador );
  }

  Multiplicar(){
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(multiply());
  }

  Dividir(){
    // this.cambioContador.emit(this.contador);
      this.store.dispatch(divide());
  }
}
