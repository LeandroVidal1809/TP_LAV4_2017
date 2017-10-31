export class JuegoAgilidad {
    primerNumero:number;
    segundoNumero:number;
    operador:string;
    resultado:number;
    resultReal:number;
    Gano:boolean;
    NumeroGenerador:boolean;
    cont:number;
    
    GenerarNuevo()
    {

    this.primerNumero=Math.floor(Math.random()*100);
    this.segundoNumero=Math.floor(Math.random()*100);
        console.info(Math.floor(Math.random() * (4 - 1)) + 1)
    switch(Math.floor(Math.random() * (4 - 1)) + 1)
    {
        case 1:
        this.operador="+";
        break;
        case 2:
        this.operador="-";
        break;
        case 3:
        this.operador="X";
        break;
        case 4:
        this.operador="/";
        break;

    }
    this.NumeroGenerador=true;
    
    this.cont=0;
    }
    Resultado()
    {
        switch(this.operador)
        {
            case '+':
            this.resultReal=this.primerNumero+this.segundoNumero;
            break;
            case '*':
            this.resultReal=this.primerNumero*this.segundoNumero;
            break;
            case '-':
            this.resultReal=this.primerNumero-this.segundoNumero;
            break;
            case '/':
            this.resultReal=this.primerNumero/this.segundoNumero;
            break;

        }
        if(this.resultado==this.resultReal)
            {
               this.Gano=true;
               this.NumeroGenerador=false;

            }
            else

                this.Gano=false;
                this.cont++;

    }

  
    }

