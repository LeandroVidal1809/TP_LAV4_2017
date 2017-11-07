import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  intentos:number;
  comienza:boolean;
  Tiempo: number;
  repetidor:any;
  Perdio:boolean;
  juegoAritm:JuegoAgilidad;
  private subscription: Subscription;
  ngOnInit() {
  }
  constructor(private route: ActivatedRoute,
    private router: Router) {
      const session = sessionStorage.getItem('user');
      if(session==null)
        {
          alert("debes estar logueado");
          this.router.navigate(['/Principal']);
          sessionStorage.setItem("muestra","false");
        } 
        else
          {
            sessionStorage.setItem("muestra","true");
          }      
          this.intentos=0;
          this.nuevoJuego = new JuegoAgilidad("Adivina El juego",false,sessionStorage.getItem('user'),"00","00",0);          
          this.juegoAritm= new JuegoAgilidad();
          this.juegoAritm.Gano=false;
          this.comienza=false;
          this.Tiempo=10;
          this.juegoAritm.cont=0;
          this.Perdio=false;
        
      
  }
  NuevoJuego() {
    this.juegoAritm.GenerarNuevo();
    this.comienza=true;
    this.nuevoJuego.Gano=false;
    this.Perdio=false;
     this.repetidor = setInterval(()=>{ 
       this.Tiempo--;
       if(this.Tiempo==0 ) {
         clearInterval(this.repetidor);
         this.verificar();
         this.Perdio=true;
         this.Tiempo=10;
         this.intentos=0;
         this.nuevoJuego.gano=false;
         this.nuevoJuego.nombre="Agilidad aritmetica"
         this.nuevoJuego.segundos=this.Tiempo;
         this.nuevoJuego.jugador=sessionStorage.getItem('user');;
         this.nuevoJuego.Save();
         this.intentos=0;
        }
       }, 900);
  }
  verificar()
  {
 
   this.juegoAritm.Resultado();
   if(this.juegoAritm.Gano)
    {
      clearInterval(this.repetidor);
      this.nuevoJuego.gano=true;
      this.nuevoJuego.nombre="Adivina el número"
      this.nuevoJuego.segundos=this.Tiempo;
      this.nuevoJuego.jugador=sessionStorage.getItem('user');;
      this.nuevoJuego.Save();
      this.intentos=0;

    }
    else
    {
      this.intentos++;
    }
    this.ocultarVerificar=false;
    
   

   
  }  

}
