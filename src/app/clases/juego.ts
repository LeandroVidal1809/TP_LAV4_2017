export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;
  public id:number;
  public intentos;
  public minutos;
  public segundos;
  public resultado;
  constructor(nombre?: string, gano?: boolean,jugador?:string,minutos?:string,segundos?:string,intentos?:any,resultado?:string) {
    if (nombre)
      this.nombre = nombre;
      this.gano = gano;
      this.jugador=jugador;
      this.intentos=intentos;
      this.minutos=minutos;
      this.segundos=segundos;
      this.resultado=resultado;

  }

  public Save(){
   var idstring= localStorage.getItem("Id");
   console.log(idstring);
   if(idstring==null)
    {
      this.id=1;
      localStorage.setItem("Id","1")
    }
    else{
      this.id= +idstring;
      this.id=this.id+1;
      localStorage.setItem("Id",this.id.toString());
    }
   var x = {"nombre":this.nombre,
            "jugador":this.jugador,
            "resultado":this.gano,
            "intentos":this.intentos,
             "minutos":this.minutos,
             "segundos":this.segundos}

             localStorage.setItem("partida"+this.id, JSON.stringify(x));
    
    console.log(localStorage.getItem("Id"));
  }

  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
