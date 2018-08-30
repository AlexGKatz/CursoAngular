import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interface/eventos.interfaces';
import { EventoService } from '../Services/eventos.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ngOnInit() {
  }
  public listaEventos: IEvento[];

  constructor(eventoService: EventoService) {
    this.listaEventos = eventoService.getEventos();
  }

  //para um evento selecionado
  public eventoSelecionado: IEvento;

  public selecionar(item: IEvento): void{
    this.eventoSelecionado = item;  
  }

}




