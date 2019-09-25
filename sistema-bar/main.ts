export class Bar {
    nombre : string;
    capacidad : number
constructor (nom:string , cap:number){
        this.nombre = nom;
        this.capacidad = cap;
    }
}

export class BarMan {
    nombre : string;
    apellido : string;
constructor (nom:string , ape:string){
    this.nombre = nom;
    this.apellido = ape;
   }
    
}

export class Trago {
    nombre : string;
    color : string;
    cantidad : number;
constructor (nom:string , col:string , cant:number){
    this.nombre = nom;
    this.color = col;
    this.cantidad = cant;
   }
}


let bar1:Bar = new Bar ("Nueva Era",50);

let bar2:Bar = new Bar ("El Patio", 200);

console.log(bar1);
console.log(bar2);

let barMan1:BarMan = new BarMan ("Carlos", "Ramirez");

let barMan2:BarMan = new BarMan ("Juan" , "Lopez");

console.log(barMan1);
console.log(barMan2);

let trago1:Trago = new Trago ("Piña Colada" , "Blanco" , 12);
let trago2:Trago = new Trago ("Fercho" , "Negro" , 3);

console.log(trago1);
console.log(trago2);






