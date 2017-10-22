export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;
  public intentos;
  public minutos;
  public segundos;
  constructor(nombre?: string, gano?: boolean,jugador?:string,minutos?:string,segundos?:string,intentos?:any) {
    if (nombre)
      this.nombre = nombre;
      this.gano = gano;
      this.jugador=jugador;
      this.intentos=intentos;
      this.minutos=minutos;
      this.segundos=segundos;
  }


  

  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
