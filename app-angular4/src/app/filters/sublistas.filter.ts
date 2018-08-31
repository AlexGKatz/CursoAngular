import { IEvento } from "../interface/eventos.interfaces"
import { Pipe, PipeTransform } from "@angular/core"
import { Config } from "protractor";

@Pipe({
    name: 'sublista'
})

export class subLista implements PipeTransform{
    transform(eventos:Config,input:string):Config {
        if(eventos == null) return null
        return eventos.filter( evento => evento.descricao.toUpperCase().includes(input.toUpperCase()) )
    }
}