import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUsuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule, MatLabel, MatSelectModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  sexo: any[] = ['Masculino', 'Femenino'];

  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private route: ActivatedRoute, private _snackBar: MatSnackBar, private router:Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    // Fetch user data based on userId and populate the form.
    this.loadUserData(userId);
  }

  loadUserData(userId: string | null) {
    // Search for the user in the `usuarios` array based on the `usuario` property
    const userData = this._usuarioService.getUser(userId);

    if (userData) {
      // Populate the form with the found user data
      this.form.patchValue(userData);
    } else {
      console.error(`User with ID ${userId} not found.`);
    }
  }

  editarUsuario() {
    if (this.form.valid) {
      const updatedUser: IUsuario = this.form.value;
      this._usuarioService.editUser(updatedUser);
      this.router.navigate(['/dashboard/usuarios']); // Navigate back to user list or other desired route

      this._snackBar.open('El usuario fue editado con éxito', 'Cerrar', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }
  }
}
