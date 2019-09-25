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
        public setCapacidad (cap : number) : void {
            this.capacidad = cap;
        }
        public getNombre(): string {
            return this.nombre;
        }
        public getCapacidad(): number {
            return this.capacidad;
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
   
   public setApellido (ape : string) : void {
    this.apellido = ape;
   }
   public getNombre(): string {
       return this.nombre;
   }
   public getApellido(): string {
    return this.apellido;
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
   public setNombre(nom:string) : void {
    this.nombre = nom;
   }
   public setColor(col:string): void {
    this.color = col;
   }
   public setCantidad(cant:number): void {
    this.cantidad = cant;
   }
   public getNombre(): string {
       return this.nombre;
   }
   public getColor(): string {
    return this.color;
   }
   public getCantidad(): number {
    return this.cantidad;
   }
}


let bar1:Bar = new Bar ("Nueva Era",50);
let bar2:Bar = new Bar ("El Patio", 200);
bar1.setNombre ("La casita");
bar1.setCapacidad (70);
bar2.setNombre ("El Pueblito");
bar2.setCapacidad (80);


console.log(bar1);
console.log(bar2);
console.log(bar1.getNombre());
console.log(bar1.getCapacidad());
console.log(bar2.getNombre());
console.log(bar2.getCapacidad());

let barMan1:BarMan = new BarMan ("Carlos", "Ramirez");
let barMan2:BarMan = new BarMan ("Juan" , "Lopez");
barMan1.setNombre ("Marcelo");
barMan2.setNombre ("Andres");
barMan1.setApellido ("Jimenez");
barMan2.setApellido ("Camacho");

console.log(barMan1);
console.log(barMan2);
console.log(barMan1.getNombre());
console.log(barMan1.getApellido());
console.log(barMan2.getNombre());
console.log(barMan2.getApellido());

let trago1:Trago = new Trago ("Piña Colada" , "Blanco" , 12);
let trago2:Trago = new Trago ("Fercho" , "Negro" , 3);
trago1.setNombre ("Fernet");
trago2.setNombre ("Licor");
trago1.setColor ("Azul");
trago2.setColor ("Plomo");
trago1.setCantidad (9);
trago2.setCantidad (10);

console.log(trago1);
console.log(trago2);
console.log(trago1.getNombre());
console.log(trago1.getColor());
console.log(trago1.getCantidad());
console.log(trago2.getNombre());
console.log(trago2.getColor());
console.log(trago2.getCantidad());








