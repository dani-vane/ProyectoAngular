import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';




@Injectable({
  providedIn: 'root'
})
export class ComentarService {



  login( {email,password}:any )
  {
    return signInWithEmailAndPassword(this.auth,email,password);

  }

  constructor(private auth:Auth) { }
}



