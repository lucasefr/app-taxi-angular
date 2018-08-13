import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioUrl = 'http://apis.approx.com.br/fca-taxi/public/api/usuarios';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>('${this.usuarioUrl}');
  }
}
