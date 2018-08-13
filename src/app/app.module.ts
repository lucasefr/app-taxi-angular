import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { HeadComponent } from './head/head.component';


import {MatMenuModule} from '@angular/material/menu';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TestdrivesComponent } from './testdrives/testdrives.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeadComponent,
    UsuariosComponent,
    TestdrivesComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
