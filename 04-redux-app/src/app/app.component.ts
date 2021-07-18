import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'redux-app';

  contador: number = 0;

  constructor(private readonly store: Store<AppState>) {
    // this.contador = 10;
    store.subscribe((state) => {
      console.log(state);
      this.contador = state.count;
    });
  }

  incrementar() {
    // this.contador++;
    this.store.dispatch(actions.increment());
  }

  decrementar() {
    // this.contador--;
    this.store.dispatch(actions.decrement());
  }
}
