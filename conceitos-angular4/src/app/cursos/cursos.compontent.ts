import { Component } from '@angular/core'
import { CursoService} from './cursos.service';

@Component({
    selector: 'cursos-lista',
    templateUrl: './cursos.component.html'
})

export class CursosComponentes{
    listaCursos: string[];

    constructor(cursosServices: CursoService){
        this.listaCursos = cursosServices.getcursos ();
    }

}