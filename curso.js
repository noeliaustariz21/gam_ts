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
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
