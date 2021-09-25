import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(64),
        ],
      ],
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    Swal.fire({
      title: "Espere por favor",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const { email, password } = this.loginForm.value;
    this.authService
      .loginUsuario(email, password)
      .then((credenciales) => {
        Swal.close();
        this.router.navigateByUrl("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  }
}
