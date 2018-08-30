import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//especificacao da rota deve ir antes dos componentes
//import { appRoutes } from './rotas/rotas.routes';

import { AppComponent } from './app.component';
//import { MenuComponent } from './menu/menu.componet';
//import { HomeComponente } from './home/home.component';
//import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent//,
    //MenuComponent//,
  //  HomeComponente,
  //  NotfoundComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
