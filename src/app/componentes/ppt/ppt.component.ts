import { Component, OnInit } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  miArray: Array<any>;
  opcionOpo:string;
  numero:number;
  opcionTu:string;
  nuevoJuego:JuegoAdivina
  eligio:boolean;
  constructor() {
    this.nuevoJuego = new JuegoAdivina("",false,sessionStorage.getItem('user'),"00","00",0);
    this.eligio=true;
    this.miArray=new Array<any>();
    this.miArray.push({"opcion":"piedra"});
    this.miArray.push({"opcion":"papel"});  
    this.miArray.push({"opcion":"tijera"});

   }

  ngOnInit() {
  }

  OpcionElegida(opcion:string)
  {
    this.opcionTu=opcion;
    this.nuevoJuego.generarnumeroppt()
    this.opcionOpo=this.miArray[this.nuevoJuego.numeroSecretoppt].opcion;
    this.eligio=false;
  }
}
