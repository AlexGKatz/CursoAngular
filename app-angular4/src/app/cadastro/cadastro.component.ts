import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interface/eventos.interfaces';
import { EventoService } from '../Services/eventos.service';
import { Config } from 'protractor';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  ngOnInit() {
  }
  public listaEventos: Config;

  constructor(eventoService: EventoService) {
      eventoService.getEventoWs().subscribe(eventos=>this.listaEventos = eventos);
  }

  //para um evento selecionado
  public eventoSelecionado: IEvento;

  public selecionar(item: IEvento): void{
    this.eventoSelecionado = item;  
  }

  //para inclusão de um novo evento
  private novoevento: IEvento;
  public novo(){
    this.novoevento = {descricao:'',data:'',preco:0}
    this.eventoSelecionado = this.novoevento
  }

  public incluir(evento:IEvento){
    this.listaEventos.push(evento);
    this.novoevento = {descricao:'',data:'',preco:0}
    this.eventoSelecionado = this.novoevento
  }

  

}




