import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { UsuarioService } from '../../../services/usuario.service';
import { ITotalUser, IUsuario } from '../../../interfaces/usuario';
import { totalmem } from 'node:os';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatToolbar, MatCardModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  listUsuarios: IUsuario[]=[];
  totalUsers: ITotalUser = {
    total: 0,
    totalMen: 0,
    totalWomen: 0,
  };
  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargarUsuarios();
    this.contarUsers();
  }

  cargarUsuarios() {
    this.listUsuarios = this._usuarioService.getUsuario();
  }
  contarUsers(){
    this.totalUsers=this._usuarioService.CountUsers();
  }
}
