/**
 * Se nesecita resolver el siguiente problema usando programacion orientada a objetos.
 * se desea realizar un sistema de venta de cursos online como por ejemplo Udemy, Platzi, etc.
 * Para ello se necesita interactuar con estudiantes, profesores de los mismos se necesita registrar
 * su informacion basica como nombre, apellido, correo; por otra parte se nesecita interactuar
 * con los cursos que se impartiran de los mismos se nesecita registrar su precio; finalmente se
 * desea guardar el registro de los estudiantes que compraron algun curso.
 * Un estudiante o profesor puede tener una o mas direcciones, al mismo tiempo una direccion esta
 * compuesta por la siguiente informacion:ciudad, barrio, calle.
 * Para los profesores en particular se nesecita gurdar su profesion.
 */

export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Docente[];

    public constructor(no:string , de:string , pr:number ,d:Docente[] ) {
       this.nombre = no;
       this.descripcion = de;
       this.precio = pr;
       this.docente = d;
    }
}

export class Docente{
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Direccion [];

    public constructor(no:string , ap:string , co:string ,pro:string , di: Direccion []){
       this.nombre = no;
       this.apellido = ap;
       this.correo = co;
       this.profesion = pro;
       this.direccion = di;
   }
}

export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion [];

    public constructor(no:string , ap:string , co:string ,di:Direccion []){
       this.nombre = no;
       this.apellido = ap;
       this.correo = co;
       this.direccion = di;
   }
}

export class Direccion  {
    private ciudad: string;
    private barrio: string;
    private calle: string;
    
    public constructor(ci:string, ba:string , ca:string ){
       this.ciudad = ci;
       this.barrio = ba;
       this.calle = ca;     
   }
}

export class CompraCurso {
    private curso: Curso;
    private estudiante: Estudiante;
    private fecha: string;

    public constructor(cu:Curso , es:Estudiante , fe:string){
       this.curso = cu;
       this.estudiante = es;
       this.fecha = fe;
       
   }
}


let direccion1:Direccion = new Direccion ('Cochabamba', 'Don Bosco', 'Vera Cruz');
console.log(direccion1);
let direccion2:Direccion = new Direccion ('Cochabamba', 'Junin', 'San Pedro');
console.log(direccion2);
let direccion3:Direccion = new Direccion ('Santa Cruz', 'Mariscal', 'Minero');
console.log(direccion3);
let direccion4:Direccion = new Direccion ('Santa Cruz', 'Amiraya', 'San Jose');
console.log(direccion4);
let direccion5:Direccion = new Direccion ('La Paz', 'Lanza', 'Nueva Esperanza');
console.log(direccion5);
let direccion6:Direccion = new Direccion ('La paz', 'Jordan', 'San Carlos');
console.log(direccion6);
let direccion7:Direccion = new Direccion ('Beni', 'America', 'San Martin');
console.log(direccion7);
let direccion8:Direccion = new Direccion ('Beni', 'Rosa', 'Cotoca');
console.log(direccion8);


let estudiante1 = new Estudiante ('Ana', 'Solis', 'anso@gmail.com', [direccion1]);
console.log(estudiante1);
let estudiante2 = new Estudiante ('Pedro', 'Suarez', 'pesu@gmail.com', [direccion2]);
console.log(estudiante2);
let estudiante3 = new Estudiante ('Jorge', 'Fernandes', 'jofe@gmail.com', [direccion3]);
console.log(estudiante3);
let estudiante4 = new Estudiante ('Karina', 'Mendez', 'kame@gmail.com', [direccion4]);
console.log(estudiante4);
let estudiante5 = new Estudiante ('Valentina', 'Perez', 'vape@gmail.com', [direccion5]);
console.log(estudiante5);
let estudiante6 = new Estudiante ('Carlos', 'Martines', 'carma@gmail.com', [direccion7]);
console.log(estudiante6);
let estudiante7 = new Estudiante ('Martin', 'Alvarado', 'mava@gmail.com', [direccion8]);
console.log(estudiante7);
let estudiante8 = new Estudiante ('Susana', 'Cuenca', 'susy@gmail.com', [direccion1]);
console.log(estudiante8);
let estudiante9 = new Estudiante ('Brenda', 'Chavez', 'bren@gmail.com', [direccion2]);
console.log(estudiante9);
let estudiante10 = new Estudiante ('Martha', 'Gutierrez', 'magus@gmail.com', [direccion3]);
console.log(estudiante10);


let docente1:Docente = new Docente ('Mario', 'Castro', 'marcas@gmail.com', 'Licenciado en Linguistica', [direccion5,direccion6]);
console.log(docente1);
let docente2:Docente = new Docente ('Angela', 'Ortiz', 'ango@gmail.com', 'Licenciada en Musica', [direccion7,direccion8]);
console.log(docente2);



let curso1:Curso = new Curso ('Open English', 'Cursos de Ingles', 700, [docente1] );
console.log(curso1);
let curso2:Curso = new Curso ('Next U', 'Cursos de Guitarra', 500, [docente2] );
console.log(curso2);
let curso3:Curso = new Curso ('Quechua Wasi', 'Cursos de Quechua', 700, [docente1] );
console.log(curso3);
let curso4:Curso = new Curso ('Free Music', 'Cursos de Musica', 500, [docente2] );
console.log(curso4);
let curso5:Curso = new Curso ('Bon Jour', 'Cursos de Frances', 700, [docente1] );
console.log(curso5);


let compracurso1:CompraCurso = new CompraCurso (curso1,estudiante1, 'Veinte de Septiembre');
console.log(compracurso1);
let compracurso2:CompraCurso = new CompraCurso (curso2,estudiante2, 'Veinte de Septiembre');
console.log(compracurso2);
let compracurso3:CompraCurso = new CompraCurso (curso3,estudiante3, 'Veintiuno de Septiembre');
console.log(compracurso3);
let compracurso4:CompraCurso = new CompraCurso (curso4,estudiante4, 'veintiuno de Septiembre');
console.log(compracurso4);
let compracurso5:CompraCurso = new CompraCurso (curso5,estudiante5, 'veintidos de Septiembre');
console.log(compracurso5);
let compracurso6:CompraCurso = new CompraCurso (curso1,estudiante6, 'veintidos de Septiembre');
console.log(compracurso6);
let compracurso7:CompraCurso = new CompraCurso (curso2,estudiante7, 'veintitres de Septiembre');
console.log(compracurso7);
let compracurso8:CompraCurso = new CompraCurso (curso3,estudiante8, 'veintitres de Septiembre');
console.log(compracurso8);
let compracurso9:CompraCurso = new CompraCurso (curso4,estudiante9, 'veinticuatro de Septiembre');
console.log(compracurso9);
let compracurso10:CompraCurso = new CompraCurso (curso5,estudiante10, 'veinticuatro de Septiembre');
console.log(compracurso10);
let compracurso11:CompraCurso = new CompraCurso (curso1,estudiante1, 'veinticinco de Septiembre');
console.log(compracurso11);
let compracurso12:CompraCurso = new CompraCurso (curso2,estudiante2, 'veinticinco de Septiembre');
console.log(compracurso12);














  