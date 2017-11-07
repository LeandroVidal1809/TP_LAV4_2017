
import { Component, OnInit , Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;


 listadoStorage:Array<any>;
 tipolistado:string;
  constructor() {
    this.listadoStorage= new Array<any>();
    var i=+localStorage.getItem("Id");
    this.tipolistado=sessionStorage.getItem("listado");
    if(i!=null)
      {
    for (var index = 1; index <= i ; index++) {
      this.listadoStorage.push(JSON.parse(localStorage.getItem("partida"+index)));
     console.log(this.listadoStorage);
      }
    }
    
   }

  ngOnInit() {
    
  }

  ver() {
    console.info(this.listado);
  }
  filterItemsOfType(type:string)
  {
    return this.listadoStorage.filter(x => x.nombre == this.tipolistado);
  }
}
