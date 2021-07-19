import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app.reducer';
import * as actions from './../contador.actions';
@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {
  // @Input() contador: number;
  // @Output() contadorCambio = new EventEmitter<number>();
  contador: number;
  constructor(private readonly store: Store<AppState>) {
    // this.contador = 0;
    this.store
      .select('count')
      .subscribe((contador) => (this.contador = contador));
  }

  ngOnInit(): void {}

  reset() {
    // this.store.dispatch(actions.reset({ numero: 0 }));
    this.store.dispatch(actions.reset());
    // this.contador = 0;
    // this.contadorCambio.emit(0);
  }
}
