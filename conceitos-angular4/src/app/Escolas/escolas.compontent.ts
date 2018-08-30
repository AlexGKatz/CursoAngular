import { Component } from '@angular/core'
import { EscolaService } from './escolas.service';

@Component({
    selector: 'cursos-escola',
    templateUrl: './escolas.component.html'
})

export class EscolaComponentes{
    listaEscola: string[];

    constructor(EscolaServices: EscolaService){
        this.listaEscola = EscolaServices.getEscolas ();
    }

}