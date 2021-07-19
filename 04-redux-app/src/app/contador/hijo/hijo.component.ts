import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces/app.reducer';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();
  contador: number;

  constructor(private readonly store: Store<AppState>) {
    // this.contador = 0;
  }

  ngOnInit(): void {
    this.store
      .select('count')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador: number) {
    // this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }
}
