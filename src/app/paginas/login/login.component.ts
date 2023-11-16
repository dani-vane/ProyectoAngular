import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ComentarService } from 'src/app/comentar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 formulariologin:FormGroup;
 constructor(private comentarservice:ComentarService){
  this.formulariologin=new FormGroup(
    {
    email:new FormControl(),
    password: new FormControl()

    }
    )

 }

login(){
  this.comentarservice.login(this.formulariologin.value).
 then(Respuesta=>{
    console.log(Respuesta);
  }).catch(error=>{
    console.log(error);
  })
  
}

}
