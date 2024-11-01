import { Injectable } from '@angular/core';
import { ITotalUser, IUsuario } from '../interfaces/usuario';
import { totalmem } from 'node:os';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: IUsuario[] = [
    { usuario: "admin", nombre: "admiNombre", apellido: "adminApellido", sexo: "Masculino" },
    { usuario: "jdoe", nombre: "John", apellido: "Doe", sexo: "Masculino" },
    { usuario: "asmith", nombre: "Alice", apellido: "Smith", sexo: "Femenino" },
    { usuario: "bwhite", nombre: "Bob", apellido: "White", sexo: "Masculino" },
    { usuario: "csong", nombre: "Cathy", apellido: "Song", sexo: "Femenino" },
    { usuario: "mjackson", nombre: "Michael", apellido: "Jackson", sexo: "Masculino" },
    { usuario: "jlopez", nombre: "Julia", apellido: "Lopez", sexo: "Femenino" },
    { usuario: "tclark", nombre: "Tom", apellido: "Clark", sexo: "Masculino" },
    { usuario: "lchen", nombre: "Linda", apellido: "Chen", sexo: "Femenino" },
    { usuario: "dwhite", nombre: "David", apellido: "White", sexo: "Masculino" }
  ];

  totalUsers: ITotalUser = 
    {
      total: 0,
      totalMen: 0,
      totalWomen: 0
    }
  
  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }
  agregarUsuario(usuario: IUsuario) {
    this.listUsuarios.unshift(usuario)
  }
  getUser(username: string | null) {
    if (username === null) {
      return '';
    }
    return this.listUsuarios.find(user => user.usuario === username);
  }
  editUser(updatedUser: IUsuario) {
    // Find the index of the user to be updated
    const userIndex = this.listUsuarios.findIndex(user => user.usuario === updatedUser.usuario);

    if (userIndex !== -1) {
      // Update the user at the found index
      this.listUsuarios[userIndex] = updatedUser;
    } else {
      console.error(`Usuario ${updatedUser.usuario} no encontrado.`);
    }
  }
  CountUsers() {
    let totalMen = 0;
    let totalWomen = 0;

    this.listUsuarios.forEach((user) => {
      if (user.sexo === "Masculino") {
        totalMen++;
      } else if (user.sexo === "Femenino") {
        totalWomen++;
      }
    })

    this.totalUsers.total=totalMen + totalWomen;
    this.totalUsers.totalMen=totalMen;
    this.totalUsers.totalWomen=totalWomen;

    return this.totalUsers;
  }

}
