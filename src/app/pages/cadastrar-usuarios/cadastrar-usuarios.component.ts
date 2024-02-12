import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css'],
})
export class CadastrarUsuariosComponent {
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl(0),
  });

  enviar() {
    const usuario: IUsuario = this.usuarioForm.value as IUsuario;
    usuario.ativo = true;

    this.usuariosService.cadastrarUsuario(usuario).subscribe({
      next: () => {
        Swal.fire(
          'PARABÉNS CHAMPS!!',
          'Usuário cadastrado com sucesso!',
          'success'
        );
        this.router.navigateByUrl('/usuarios');
      },
      error: (error) => {
        const { message } = error;
        Swal.fire('DEU ERRO', message, 'error');
      },
    });
  }
}
