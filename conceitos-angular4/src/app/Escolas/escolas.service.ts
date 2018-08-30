import { Injectable } from '@angular/core';

@Injectable()

export class EscolaService{
    getEscolas(){
        return ['Estacio', 'Uninove'];
    }
}

