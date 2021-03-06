import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

//import { HttpModule } from "@angular/http"
import { HttpClientModule } from "@angular/common/http"
 
//especificacao da rota deve vir antes dos componentes
import { appRoutes } from './rotas/app.routes'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EventoService } from './Services/eventos.service';
import { subLista } from './filters/sublistas.filter';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, HomeComponent, CadastroComponent, NotfoundComponent,subLista
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule,  HttpClientModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
