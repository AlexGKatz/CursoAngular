import { IEvento } from '../interface/eventos.interfaces'
import {Injectable} from '@angular/core'

@Injectable()

export class EventoService{
    
    public getEventos(): IEvento[]{
        return [
            {descricao: 'Avaliacao Angular', data:'06/09/2018',preco:0},
            {descricao: 'Palestra',data:'06/10/2018',preco:150},
            {descricao: 'Congresso',data:'06/10/2018',preco:400}
          ];
    }
    
}