import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CursosComponentes } from './cursos/cursos.compontent'
import { CursoService } from './cursos/cursos.service'
import { EscolaService } from './Escolas/escolas.service';
import { EscolaComponentes } from './Escolas/escolas.compontent';
import { BindingComponent } from './Bindings/binding.component';
import { EventoComponent } from './eventos/eventos.component';
import { LoginComponent  } from './Login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponentes,
    EscolaComponentes,
    BindingComponent,
    EventoComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [
    CursoService,
    EscolaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
