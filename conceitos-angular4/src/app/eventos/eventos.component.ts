import {Component} from "@angular/core";

@Component({
    selector:'eventos-binding',
    templateUrl:'./eventos.component.html',
    styles:[`
            .destaque{
                background-color:green;
                font-weight: bold;
            }
          `]

})

export class EventoComponent{
    
    conteudoAtual: string;
    conteudoArmazenado: string ='';
    isMouseOver: boolean = false;

    onClick(){
        alert('Execução de evento - binding unidirecional');
    }
    onkeyup(event){
        this.conteudoAtual = event.target.value;
    }
    eventoSave(valor: string){
        this.conteudoArmazenado = valor;
    }

    eventoMouseOverOut(){
        this.isMouseOver = !this.isMouseOver;
    }
    
}