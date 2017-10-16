import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  username:string;
  password:string;
  Mensaje:string;
  passwordconfirm:string;
  constructor(private _auth:AngularFireAuth) { }

  ngOnInit() {
  }


  async Aceptar()
  {
    if(this.password!=null){
    if( this.password.length>5){
    if(this.password==this.passwordconfirm)
      {
        try{
        
      const result = await this._auth.auth.createUserWithEmailAndPassword(this.username,this.password);
      this.Mensaje=this.username + " Fue ingresado Exitosamente!"
      alert(this.Mensaje);
      }
      catch(e){
      
      console.error(e);
        alert("error al registrarse");
      }
    }
    else
      {alert("las claves no coinciden , intente nuevamente")}
  }
  else
    {

      alert("la clave debe contener por lo menos 6 caracteres")
    }
  }
  else
    {
      alert("Ingrese Password")
    }
  }
  

}
