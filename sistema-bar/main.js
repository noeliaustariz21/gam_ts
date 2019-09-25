"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    BarMan.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    BarMan.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    Trago.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Trago.prototype.setColor = function (col) {
        this.color = col;
    };
    Trago.prototype.setCantidad = function (cant) {
        this.cantidad = cant;
    };
    Trago.prototype.getNombre = function () {
        return this.nombre;
    };
    Trago.prototype.getColor = function () {
        return this.color;
    };
    Trago.prototype.getCantidad = function () {
        return this.cantidad;
    };
    return Trago;
}());
exports.Trago = Trago;
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El Patio", 200);
bar1.setNombre("La casita");
bar1.setCapacidad(70);
bar2.setNombre("El Pueblito");
bar2.setCapacidad(80);
console.log(bar1);
console.log(bar2);
console.log(bar1.getNombre());
console.log(bar1.getCapacidad());
console.log(bar2.getNombre());
console.log(bar2.getCapacidad());
var barMan1 = new BarMan("Carlos", "Ramirez");
var barMan2 = new BarMan("Juan", "Lopez");
barMan1.setNombre("Marcelo");
barMan2.setNombre("Andres");
barMan1.setApellido("Jimenez");
barMan2.setApellido("Camacho");
console.log(barMan1);
console.log(barMan2);
console.log(barMan1.getNombre());
console.log(barMan1.getApellido());
console.log(barMan2.getNombre());
console.log(barMan2.getApellido());
var trago1 = new Trago("Piña Colada", "Blanco", 12);
var trago2 = new Trago("Fercho", "Negro", 3);
trago1.setNombre("Fernet");
trago2.setNombre("Licor");
trago1.setColor("Azul");
trago2.setColor("Plomo");
trago1.setCantidad(9);
trago2.setCantidad(10);
console.log(trago1);
console.log(trago2);
console.log(trago1.getNombre());
console.log(trago1.getColor());
console.log(trago1.getCantidad());
console.log(trago2.getNombre());
console.log(trago2.getColor());
console.log(trago2.getCantidad());
