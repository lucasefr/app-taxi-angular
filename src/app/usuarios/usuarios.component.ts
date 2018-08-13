import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Array<any>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.usuarioService.listar().subscribe(dados => this.usuarios = dados);
  }

}
