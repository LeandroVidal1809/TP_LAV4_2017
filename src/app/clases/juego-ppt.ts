import { Juego } from '../clases/juego'

export class JuegoPpt extends  Juego {
  numeroSecreto: number = 0;
  numeroSecretoppt: number = 0;
  numeroIngresado = 0;
   
  constructor(nombre?: string, gano?: boolean, jugador?:string,minutos?:string,segundos?:string,intentos?:any) {
        super("ppt",gano,jugador,minutos,segundos,intentos)}

  public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        } else {
            return false;
        }
    }

    public generarnumeroppt() {
        var min = Math.ceil(0);
        var max = Math.floor(3);
         this.numeroSecretoppt = Math.floor(Math.random() * (max - min)) + min;
         this.gano = false;
       }
}