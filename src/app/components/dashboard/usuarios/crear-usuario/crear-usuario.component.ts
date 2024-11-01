import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUsuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule, MatLabel, MatSelectModule, MatButtonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})

export class CrearUsuarioComponent {

  sexo:any[]=['Masculino','Femenino'];

  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private router: Router, private _snackBar:MatSnackBar){
    this.form=this.fb.group({
      usuario:['', Validators.required], 
      nombre:['', Validators.required], 
      apellido:['', Validators.required], 
      sexo:['', Validators.required], 
    })
  }

  agregarUsuario(){
    const user:IUsuario={
      usuario:this.form.value.usuario,
      nombre:this.form.value.nombre,
      apellido:this.form.value.apellido,
      sexo:this.form.value.sexo,
    }

    console.log(user);
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])

    
    this._snackBar.open('El usuario fue agregado con éxito', 'Cerrar', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }
}
