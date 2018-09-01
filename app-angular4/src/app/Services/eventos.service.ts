import { IEvento } from '../interface/eventos.interfaces'
import { Injectable } from '@angular/core'

import { Http, Response } from "@angular/http"
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs"

import { map } from "rxjs/operators"


@Injectable()


export class EventoService {

    //acesso ao http
    public constructor(private _http: HttpClient) { }

    private url: string = "http://localhost:3000/data/"

    public getEventoWs(){
       return this._http.get(this.url)
    }

    public postEventosWs(evento:IEvento): Observable<IEvento>{
        return this._http.post<IEvento>(this.url,evento);
    }

    public getEventos(): IEvento[] {
        return [
            { descricao: 'Avaliacao Angular', data: '06/09/2018', preco: 0 },
            { descricao: 'Palestra', data: '06/10/2018', preco: 150 },
            { descricao: 'Congresso', data: '06/10/2018', preco: 400 }
        ];
    }

}