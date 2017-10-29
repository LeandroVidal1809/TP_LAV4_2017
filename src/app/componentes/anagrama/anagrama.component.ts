import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  miArrayPalabras:Array<any>;
  i:number;
  ocultaCorrecto:boolean;
  AciertosTXT:string;
  aciertos:number;
  Tiempo: number;
  Minuto:number;
  comenzo:boolean;
  repetidor:any;
  respuesta:string;
  gano:number;
  intentos:number;
  comienza:boolean;
  palabraMuestra:string;
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

          this.inicializa();
          
    
    }

    inicializa()
    {
      this.aciertos=0;
      this.i=0;      
      this.miArrayPalabras=new Array<any>();
      this.miArrayPalabras.push({"mezcla":"palabra_monica","Ok":"palabra_camino"});
      this.miArrayPalabras.push({"mezcla":"palabra_brasil","Ok":"palabra_silbar"});
      this.miArrayPalabras.push({"mezcla":"palabra_marta","Ok":"palabra_matar"});
      this.miArrayPalabras.push({"mezcla":"palabra_praga","Ok":"palabra_pagar"});
      this.miArrayPalabras.push({"mezcla":"palabra_pedro","Ok":"palabra_poder"});
      this.palabraMuestra=this.miArrayPalabras[this.i].mezcla;
      this.ocultaCorrecto=true;
      this.Tiempo=0;
      this.Minuto=0;
      this.AciertosTXT="00/00";
      this.comienza=false;
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

    habilita()
    {
      this.gano=0;
      this.ComenzarTimer();
      this.Tiempo=0;
      this.Minuto=0;
      this.intentos=3;
      this.comienza=true;
    }
   async Verificar()
    {
      this.respuesta=this.respuesta.toLocaleLowerCase();
        if(this.miArrayPalabras[this.i].Ok=="palabra_"+this.respuesta)
        {
          this.palabraMuestra=this.miArrayPalabras[this.i].Ok;
          this.respuesta=this.respuesta.toLocaleUpperCase();
            this.ocultaCorrecto=false;
            await this.delay(2000);
            this.ocultaCorrecto=true;
            this.respuesta="";
            this.i++;
            this.aciertos++;
            this.AciertosTXT="0"+this.aciertos+"/05";
            if(this.i>=this.miArrayPalabras.length)
            {
              this.ocultaCorrecto=true
              this.gano=10;
             // this.nuevoJuego.gano=true;
             this.comienza=false; 
             this.intentos=0;
              this.TerminarTimer();
            }
            else
            {
              this.palabraMuestra=this.miArrayPalabras[this.i].mezcla;
            }
        }
      else
       {
        this.intentos--;
        if(this.intentos==0)
          {
            // this.nuevoJuego.gano=false;
            // this.perdio=false;
          }
       }

    }

    delay(ms: number)
    {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
  
  TerminarTimer()
  {
    clearInterval(this.repetidor);
    this.intentos=0;
  }
  ngOnInit() {
  }

}
