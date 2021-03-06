import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { editar, eliminar, toggle } from './../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editando = false;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  editClick() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1000);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) return;
    this.store.dispatch(
      editar({
        id: this.todo.id,
        texto: this.txtInput.value,
      })
    );
  }

  borrar() {
    this.store.dispatch(eliminar({ id: this.todo.id }));
  }
}
