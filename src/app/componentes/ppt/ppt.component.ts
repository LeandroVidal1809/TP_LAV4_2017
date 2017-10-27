import { Component, OnInit } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  miArray: Array<any>;
  opcionOpo:string;
  comenzo:boolean;
  numero:number;
  opcionTu:string;
  contador:number;
  puntoTu:number;
  puntoOpo:number;
  plataforma:boolean;
  botonComenzar:boolean;
  nuevoJuego:JuegoAdivina
  eligio:boolean;
  Tiempo: number;
  Minuto:number;
  result:string
  fin:boolean;
  Minutostring:any;
  repetidor:any;
  constructor() {
    this.nuevoJuego = new JuegoAdivina("",false,sessionStorage.getItem('user'),"00","00",0);
    this.eligio=true;
    this.miArray=new Array<any>();
    this.miArray.push({"opcion":"piedra","ganaCon":"tijera","pierdeCon":"papel"});
    this.miArray.push({"opcion":"papel","ganaCon":"piedra","pierdeCon":"tijera"});  
    this.miArray.push({"opcion":"tijera","ganaCon":"papel","pierdeCon":"piedra"});
    this.puntoOpo=0;
    this.puntoTu=0;
    this.plataforma=true;
    this.botonComenzar=false;
    this.Tiempo=0;
    this.comenzo=false;
    this.Minuto=0;
    this.fin=true;

   }

  ngOnInit() {
  }
  Habilita()
  {
    this.Tiempo=0;
    this.plataforma=false;
    this.botonComenzar=true;
    this.contador=0;
    this.comenzo=true;
    this.repetidor = setInterval(()=>{
      if(this.Tiempo==20)
      {
        clearInterval(this.repetidor);
        this.comenzo=false;
        this.fin=false;
       if(this.puntoTu>this.puntoOpo)
        {
          this.result="Ganado!!";
        }
        else
          {
            this.result="Perdido! :(";
          }
      } 
      else{
        this.Tiempo++;
      }
      
      }, 1000);
      this.comenzo=true;
  }
  OpcionElegida(opcion:string)
  {
    this.opcionTu=opcion;
    this.nuevoJuego.generarnumeroppt()
    this.opcionOpo=this.miArray[this.nuevoJuego.numeroSecretoppt].opcion;
    this.eligio=false;
    console.log(this.miArray[this.nuevoJuego.numeroSecretoppt].pierdeCon+"-"+this.opcionOpo);
    console.log(this.miArray[this.nuevoJuego.numeroSecretoppt].ganaCon+"-"+this.opcionOpo);

    if(this.opcionTu==this.opcionOpo)
      {
        //alert("Empate");
      }
      else if( this.miArray[this.nuevoJuego.numeroSecretoppt].pierdeCon==this.opcionTu)
        {
         
        this.puntoTu++;
        }
     
        if(this.miArray[this.nuevoJuego.numeroSecretoppt].ganaCon==this.opcionTu){
          
          this.puntoOpo++;
        }

  }
}
