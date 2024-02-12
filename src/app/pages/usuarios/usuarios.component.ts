import { Component } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  usuarios: IUsuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.buscarTodos().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  remover(id?: number) {
    Swal.fire({
      title: 'Tem certeza disso?',
      text: "Você não poderá desfazer depois de removido.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim delete!',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
      }
    });
  }
}
