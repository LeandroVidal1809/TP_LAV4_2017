import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina-el-estadio',
  templateUrl: './adivina-el-estadio.component.html',
  styleUrls: ['./adivina-el-estadio.component.css']
})
export class AdivinaElEstadioComponent implements OnInit {
  i:number;
  miArrayClub : Array<any>;
  plataforma:boolean;
  botonComenzar:boolean;
  club:string;
  miArrayEscudo: Array<any>;
  intentos:number;
  constructor() { 

    this.miArrayClub=new Array<any>();
    this.miArrayEscudo=new Array<any>();
    this.botonComenzar=false;
    this.plataforma=true;
    this.i=0;
    
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


  OpcionElegida(opcion:string)
  {

    if(this.miArrayClub[this.i].Club==opcion)
      {
          alert("Bien");
          this.i++;
          this.club=this.miArrayClub[this.i].Black;
          this.intentos=3;
       }
      else
      {
        this.intentos--;
      }

  }
  Habilita()
  {
    this.intentos=3;
    this.botonComenzar=true;
    this.plataforma=false;
    this.i=0;

    this.club=this.miArrayClub[this.i].Black;
  }


  ngOnInit() {
  }

}
