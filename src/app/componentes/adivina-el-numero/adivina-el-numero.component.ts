
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  comenzo:boolean;
  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  Tiempo: number;
  Minuto:number;
  Minutostring:any;
  repetidor:any;
  constructor() { 
    this.nuevoJuego = new JuegoAdivina("",false,sessionStorage.getItem('user'),"00","00",0);
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=false;
    this.Tiempo=0;
    this.comenzo=false;
    this.Minuto=0;
  }
  generarnumero() {

    this.nuevoJuego.generarnumero();
    this.contador=0;
    this.repetidor = setInterval(()=>{
      if(this.Tiempo==59)
      {
        this.Tiempo=0;
        this.Minuto++;
      } 
      else{
        this.Tiempo++;
      }
      
      }, 1000);
      this.comenzo=true;
    
  }
  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
    console.info("numero Secreto:",this.nuevoJuego.gano);  
    if (this.nuevoJuego.verificar()){
      
      this.nuevoJuego.intentos=this.contador;
      this.nuevoJuego.gano=true;
      this.nuevoJuego.minutos=this.Minuto;
      this.nuevoJuego.segundos=this.Tiempo;
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Felicidades!! Has ganado en " + this.contador + " intentos" ,true);
      this.nuevoJuego.numeroSecreto=0;
        clearInterval(this.repetidor);
        this.ocultarVerificar=true;
        this.comenzo=false;
        this.Tiempo=0;
     

    }else{

      let mensaje:string;

            mensaje="Error Número : " + this.contador;
            
      this.MostarMensaje(mensaje+" ("+this.nuevoJuego.retornarAyuda()+")");
     

    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  
  ngOnInit() {
  }

}
