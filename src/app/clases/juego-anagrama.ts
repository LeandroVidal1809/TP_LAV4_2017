import { Juego } from '../clases/juego'
export class JuegoAnagrama  extends  Juego  {

    constructor(nombre?: string, gano?: boolean, jugador?:string,minutos?:string,segundos?:string,intentos?:any) {
        super("Adivina el número",gano,jugador,minutos,segundos,intentos)}
}
