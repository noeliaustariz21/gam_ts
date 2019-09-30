"use strict";
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
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(no, de, pr, d) {
        this.nombre = no;
        this.descripcion = de;
        this.precio = pr;
        this.docente = d;
    }
    Curso.prototype.getPrecio = function () {
        return this.precio;
    };
    return Curso;
}());
exports.Curso = Curso;
var Docente = /** @class */ (function () {
    function Docente(no, ap, co, pro, di) {
        this.nombre = no;
        this.apellido = ap;
        this.correo = co;
        this.profesion = pro;
        this.direccion = di;
    }
    Docente.prototype.newDireccion = function (di) {
        this.direccion.push(di);
    };
    return Docente;
}());
exports.Docente = Docente;
var Estudiante = /** @class */ (function () {
    function Estudiante(no, ap, co, di) {
        this.nombre = no;
        this.apellido = ap;
        this.correo = co;
        this.direccion = di;
    }
    Estudiante.prototype.newDireccion = function (di) {
        this.direccion.push(di);
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Direccion = /** @class */ (function () {
    function Direccion(ci, ba, ca) {
        this.ciudad = ci;
        this.barrio = ba;
        this.calle = ca;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(cu, es, fe) {
        this.curso = cu;
        this.estudiante = es;
        this.fecha = fe;
    }
    CompraCurso.prototype.getCurso = function () {
        return this.curso;
    };
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var PlataformaEducativa = /** @class */ (function () {
    function PlataformaEducativa(nom, reg) {
        this.nombre = nom;
        this.regitro = reg;
    }
    PlataformaEducativa.prototype.ventaCurso = function (curso) {
        this.regitro.push(curso);
    };
    PlataformaEducativa.prototype.totalIngresos = function () {
        var acumulado = 0;
        var compracurso;
        var curso;
        var precio;
        for (var i = 0; i < this.regitro.length; i++) {
            compracurso = this.regitro[i];
            curso = compracurso.getCurso();
            precio = curso.getPrecio();
            acumulado = acumulado + precio;
            //acumulado=acumulado+this.regitro[i].getCurso().getPrecio();
        }
        return acumulado;
    };
    return PlataformaEducativa;
}());
exports.PlataformaEducativa = PlataformaEducativa;
var direccion1 = new Direccion('Cochabamba', 'Don Bosco', 'Vera Cruz');
console.log(direccion1);
var direccion2 = new Direccion('Cochabamba', 'Junin', 'San Pedro');
console.log(direccion2);
var direccion3 = new Direccion('Santa Cruz', 'Mariscal', 'Minero');
console.log(direccion3);
var direccion4 = new Direccion('Santa Cruz', 'Amiraya', 'San Jose');
console.log(direccion4);
var direccion5 = new Direccion('La Paz', 'Lanza', 'Nueva Esperanza');
console.log(direccion5);
var direccion6 = new Direccion('La paz', 'Jordan', 'San Carlos');
console.log(direccion6);
var direccion7 = new Direccion('Beni', 'America', 'San Martin');
console.log(direccion7);
var direccion8 = new Direccion('Beni', 'Rosa', 'Cotoca');
console.log(direccion8);
var estudiante1 = new Estudiante('Ana', 'Solis', 'anso@gmail.com', [direccion1]);
console.log(estudiante1);
var estudiante2 = new Estudiante('Pedro', 'Suarez', 'pesu@gmail.com', [direccion2]);
console.log(estudiante2);
var estudiante3 = new Estudiante('Jorge', 'Fernandes', 'jofe@gmail.com', [direccion3]);
console.log(estudiante3);
var estudiante4 = new Estudiante('Karina', 'Mendez', 'kame@gmail.com', [direccion4]);
console.log(estudiante4);
var estudiante5 = new Estudiante('Valentina', 'Perez', 'vape@gmail.com', [direccion5]);
console.log(estudiante5);
var estudiante6 = new Estudiante('Carlos', 'Martines', 'carma@gmail.com', [direccion7]);
console.log(estudiante6);
var estudiante7 = new Estudiante('Martin', 'Alvarado', 'mava@gmail.com', [direccion8]);
console.log(estudiante7);
var estudiante8 = new Estudiante('Susana', 'Cuenca', 'susy@gmail.com', [direccion1]);
console.log(estudiante8);
var estudiante9 = new Estudiante('Brenda', 'Chavez', 'bren@gmail.com', [direccion2]);
console.log(estudiante9);
var estudiante10 = new Estudiante('Martha', 'Gutierrez', 'magus@gmail.com', [direccion3]);
console.log(estudiante10);
var docente1 = new Docente('Mario', 'Castro', 'marcas@gmail.com', 'Licenciado en Linguistica', [direccion5, direccion6]);
console.log(docente1);
var docente2 = new Docente('Angela', 'Ortiz', 'ango@gmail.com', 'Licenciada en Musica', [direccion7, direccion8]);
console.log(docente2);
var curso1 = new Curso('Open English', 'Cursos de Ingles', 700, [docente1]);
console.log(curso1);
var curso2 = new Curso('Next U', 'Cursos de Guitarra', 500, [docente2]);
console.log(curso2);
var curso3 = new Curso('Quechua Wasi', 'Cursos de Quechua', 700, [docente1]);
console.log(curso3);
var curso4 = new Curso('Free Music', 'Cursos de Musica', 500, [docente2]);
console.log(curso4);
var curso5 = new Curso('Bon Jour', 'Cursos de Frances', 700, [docente1]);
console.log(curso5);
var compracurso1 = new CompraCurso(curso1, estudiante1, 'Veinte de Septiembre');
console.log(compracurso1);
var compracurso2 = new CompraCurso(curso2, estudiante2, 'Veinte de Septiembre');
console.log(compracurso2);
var compracurso3 = new CompraCurso(curso3, estudiante3, 'Veintiuno de Septiembre');
console.log(compracurso3);
var compracurso4 = new CompraCurso(curso4, estudiante4, 'veintiuno de Septiembre');
console.log(compracurso4);
var compracurso5 = new CompraCurso(curso5, estudiante5, 'veintidos de Septiembre');
console.log(compracurso5);
var compracurso6 = new CompraCurso(curso1, estudiante6, 'veintidos de Septiembre');
console.log(compracurso6);
var compracurso7 = new CompraCurso(curso2, estudiante7, 'veintitres de Septiembre');
console.log(compracurso7);
var compracurso8 = new CompraCurso(curso3, estudiante8, 'veintitres de Septiembre');
console.log(compracurso8);
var compracurso9 = new CompraCurso(curso4, estudiante9, 'veinticuatro de Septiembre');
console.log(compracurso9);
var compracurso10 = new CompraCurso(curso5, estudiante10, 'veinticuatro de Septiembre');
console.log(compracurso10);
var compracurso11 = new CompraCurso(curso1, estudiante1, 'veinticinco de Septiembre');
console.log(compracurso11);
var compracurso12 = new CompraCurso(curso2, estudiante2, 'veinticinco de Septiembre');
console.log(compracurso12);
console.log(estudiante1);
estudiante1.newDireccion(direccion8);
console.log(estudiante1);
console.log(docente1);
docente1.newDireccion(direccion1);
console.log(docente1);
var plataformaesduactiva1 = new PlataformaEducativa('Edu.com', [compracurso1]);
console.log(plataformaesduactiva1);
plataformaesduactiva1.ventaCurso(compracurso2);
console.log(plataformaesduactiva1);
var suma = plataformaesduactiva1.totalIngresos();
console.log(suma);
