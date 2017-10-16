import { Component, OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Subscription} from "rxjs";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  username:string;
  password:string;
  usernameR:string;
  passwordR:string;
  passwordconfirmR:string;
  Mensaje:string;

  constructor(   private _auth:AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {
      }

  ngOnInit() {
  }

  async Entrar() {

    if(this.username==null||this.password==null||this.password==''||this.username=='')
      {
       alert("Debe completar el Email y su Clave para ingresar");
      }
      else{

      
   await this._auth.auth.signInWithEmailAndPassword(this.username,this.password)
                        .then(result => { alert("Bienvenido/a "+this.username);sessionStorage.setItem("user",this.username); this.router.navigate(['/Juegos']);})
                        .catch(error =>{ alert(error.message)})
      }  

   
  }
  

}
