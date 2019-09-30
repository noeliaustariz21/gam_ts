/**
 * Resuelva el siguiente problema, usando programacion orientada a objetos y herencia:
 * se necesita implementar un sistema para la venta de peliculas en formato CD, DVD, Blu-ray.
 * Donde debe estar involucrado el cliente.
 * se debe guardar CD's, DVD's, Blu-ray's en una misma lista
 * se debe poder calcular el monto total percibido por la venta de DVD's
 * se debe poder calcular el monto total percibido por la venta de CD's
 * se debe poder calcular el monto total percivido por la venta de Blu-ray's
 * se debe poder calcular el monto total percibido por la venta de CD's, DVD's y Blu-ray's
 * los 3 tipos de discos deben guardar una lista.
 */

 export class Cliente {
     protected nombre: string;
     protected apellido: string;

     public constructor(nom:string , ape: string) {
         this.nombre = nom;
         this.apellido = ape;
    }
}

 export class Disco  {
     protected cliente: Cliente;
     protected nombre: string;
     protected precio: number;
     protected formato: string;

     public constructor(cli: Cliente , nom: string , pre: number , form: string) {
         this.cliente = cli;
         this.nombre = nom;
         this.precio = pre;
         this.formato = form;
    }
}

 export class Dvd extends Disco {
     public constructor(cli: Cliente , nom: string , pre: number , form: string) {
         super(cli , nom , pre , form );
    }
}
 export class Cd extends Disco {
     public constructor(cli: Cliente , nom: string , pre: number , form: string) {
         super(cli , nom , pre , form);
    }
}
 export class Bluray extends Disco {
     public constructor(cli: Cliente , nom: string , pre: number , form: string) {
         super(cli , nom , pre , form);
    }
}
 export class TiendaDiscos {
     protected lista: Disco[];

     public constructor(lis:Disco[]){
         this.lista = lis;
     }
 
     public VentaDiscos(disco:Disco): void {
         this.lista.push(disco);
     }
}
  export class MontoTotalDvds():number {
      for(let i:number = 0 ; i<this.lista.length ; i++)
  }
 
 