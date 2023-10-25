import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.buscarTodos().subscribe(usuarios => {
      console.log(usuarios);
    })
  }



}
