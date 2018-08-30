import { Injectable } from '@angular/core';

@Injectable()

export class CursoService{
    getcursos(){
        return ['Javas', '.Net','Angular','Culinaria'];
    }
}

