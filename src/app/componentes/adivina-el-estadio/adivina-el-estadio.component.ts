
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-adivina-el-estadio',
  templateUrl: './adivina-el-estadio.component.html',
  styleUrls: ['./adivina-el-estadio.component.css']
})
export class AdivinaElEstadioComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  i:number;
  miArrayClub : Array<any>;
  plataforma:boolean;
  botonComenzar:boolean;
  club:string;
  perdio:boolean;
  ocultaEscudo:boolean;
  miOpcion:string;
  miArrayEscudo: Array<any>;
  intentos:number;
  ocultaCorrecto:boolean;
  nuevoJuego: JuegoAdivina;
  Tiempo: number;
  Minuto:number;
  comenzo:boolean;
  repetidor:any;
 
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
      
    this.ocultaCorrecto=true;
    this.botonComenzar=false;
    this.plataforma=true;
    this.Tiempo=0;
    this.comenzo=false;
    this.Minuto=0;
    this.perdio=true;
    this.i=0;
    this.nuevoJuego = new JuegoAdivina("",false,sessionStorage.getItem('user'),"00","00",0);
    this.CargarArrays();
  }


   delay(ms: number)
    {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

 async OpcionElegida(opcion:string)
  {
    this.miOpcion=opcion;
      if(this.miArrayClub[this.i].Club==opcion)
        {
            this.club=this.miArrayClub[this.i].Ok;
            this.ocultaCorrecto=false;
            await this.delay(2000);
            this.ocultaCorrecto=true;
            this.i++;
            
            if(this.i>=this.miArrayClub.length)
            {
              this.ocultaCorrecto=true
              this.nuevoJuego.gano=true;
              this.nuevoJuego.nombre="Adivina el estadio"
              this.nuevoJuego.minutos=this.Minuto;
              this.nuevoJuego.segundos=this.Tiempo;
              this.nuevoJuego.jugador=sessionStorage.getItem('user');;
              this.nuevoJuego.Save();
              this.intentos=1;
             
              this.TerminarTimer();
            }
            else
            {
              this.club=this.miArrayClub[this.i].Black;
            }
        }
      else
       {
        this.intentos--;
        if(this.intentos==0)
          {
            
            this.nuevoJuego.gano=false;
            this.nuevoJuego.nombre="Adivina el estadio"
            this.nuevoJuego.minutos=this.Minuto;
            this.nuevoJuego.segundos=this.Tiempo;
            this.nuevoJuego.jugador=sessionStorage.getItem('user');;
            this.nuevoJuego.Save();
            this.intentos=0
          }
       }


  }
  //Juego Propio Leandro Vidal Finalizada su funcionalidad el 18/10/2017
  Habilita()
  {   
    this.ComenzarTimer();
    this.Tiempo=0;
    this.Minuto=0;
    this.intentos=3;
    this.botonComenzar=true;
    this.plataforma=false;
    this.i=0;
    this.club=this.miArrayClub[this.i].Black;
  }

  CargarArrays()
  {
    this.miArrayClub=new Array<any>();
    this.miArrayEscudo=new Array<any>();
    this.miArrayClub.push({"Club":"Racing","Black":"Black_Racing","Ok":"Ok_Racing"});
    this.miArrayClub.push({"Club":"Casla","Black":"Black_Casla","Ok":"Ok_Casla"});
    this.miArrayClub.push({"Club":"Huracan","Black":"Black_Huracan","Ok":"Ok_Huracan"});
    this.miArrayClub.push({"Club":"Velez","Black":"Black_Velez","Ok":"Ok_Velez"});  
    this.miArrayEscudo.push({"Club":"Ferro"})
    this.miArrayEscudo.push({"Club":"Velez"})
    this.miArrayEscudo.push({"Club":"Casla"})
    this.miArrayEscudo.push({"Club":"Racing"})
    this.miArrayEscudo.push({"Club":"Barracas"})
    this.miArrayEscudo.push({"Club":"Huracan"})
    this.miArrayEscudo.push({"Club":"Gimnasia"})
    this.miArrayEscudo.push({"Club":"Godoy"})

  }

  ComenzarTimer()
  { 
  this.repetidor = setInterval(()=>{
    if(this.Tiempo==59)
    {
      this.Tiempo=0;
      this.Minuto++;
    } 
    else{
      this.Tiempo++;
      console.log(this.Tiempo);
    }
    
    }, 1000);
    this.comenzo=true;
 }
TerminarTimer()
{
  clearInterval(this.repetidor);
  this.intentos=0;
  

}
  ngOnInit() {
  }

}
