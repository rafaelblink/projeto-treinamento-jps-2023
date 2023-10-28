import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css'],
})
export class CadastrarUsuariosComponent {
  constructor(private usuariosService: UsuariosService) {}

  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl(0),
  });

  enviar() {
    const usuario: IUsuario = this.usuarioForm.value as IUsuario;
    usuario.ativo = true;

    this.usuariosService.cadastrarUsuario(usuario).subscribe(
      (result) => {
        Swal.fire(
          'PARABÉNS CHAMPS!!',
          'Usuário cadastrado com sucesso!',
          'success'
        );
      },
      (error) => {
        const { message } = error;
        Swal.fire('DEU ERRO', message, 'error');
      }
    );
  }
}
