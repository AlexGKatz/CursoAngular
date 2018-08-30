import { Component } from "@angular/core";
import { AlertPromise } from "selenium-webdriver";

@Component({
    selector:'login-autenticar',
    templateUrl:'./login.component.html',
    styles:[`
            .destaque{
                background-color:red;
                font-weight: bold;
            }
          `]

})


export class LoginComponent{
    
    mensagem: string;
    isMouseOver: boolean = false;

    onClick(login: string,senha: string){
        
        if( login == 'Alex' && senha =='Senha'){
            this.isMouseOver = false
            this.mensagem = 'Login com sucesso'
        }
        else{
            this.mensagem = 'Login Fail'
            this.isMouseOver = true
        }
        
    }
    onkeyup(){
        this.mensagem = null
    }

}