export class Bar {
    private nombre : string;
    private capacidad : number;
constructor (nom:string , cap:number) {
        this.nombre = nom;
        this.capacidad = cap;
}
        public setNombre (nom : string) : void {
            this.nombre = nom;
        }
        public getNombre(): string {
            return this.nombre;
        }
    }


export class BarMan {
    private nombre : string;
    private apellido : string;
constructor (nom:string , ape:string) {
    this.nombre = nom;
    this.apellido = ape;
}
   public setNombre (nom : string) : void {
       this.nombre = nom;
   }
   public getNombre(): string {
       return this.nombre;
   }
    
}

export class Trago {
    private nombre : string;
    private color : string;
    private cantidad : number;
constructor (nom:string , col:string , cant:number) {
    this.nombre = nom;
    this.color = col;
    this.cantidad = cant;
   }
   public setNombre (nom : string) : void {
       this.nombre = nom;
   }
   public getNombre(): string {
       return this.nombre;
   }
}


let bar1:Bar = new Bar ("Nueva Era",50);
let bar2:Bar = new Bar ("El Patio", 200);
bar1.setNombre ("La casita");

console.log(bar1);
console.log(bar2);
console.log(bar1.getNombre());

let barMan1:BarMan = new BarMan ("Carlos", "Ramirez");
let barMan2:BarMan = new BarMan ("Juan" , "Lopez");
barMan1.setNombre ("Marcelo");

console.log(barMan1);
console.log(barMan2);
console.log(barMan1.getNombre());

let trago1:Trago = new Trago ("Piña Colada" , "Blanco" , 12);
let trago2:Trago = new Trago ("Fercho" , "Negro" , 3);
trago1.setNombre ("Fernet");

console.log(trago1);
console.log(trago2);
console.log(trago1.getNombre());






