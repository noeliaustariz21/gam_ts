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
    private docente: Docente;

    public constructor(no:string , de:string , pr:number ,d:Docente ) {
       this.nombre = no;
       this.descripcion = de;
       this.precio = pr;
       this.docente = d;
    }
}

export class Docente {
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

export class Direccion {
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














  