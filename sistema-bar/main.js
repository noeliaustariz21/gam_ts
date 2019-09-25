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
    Bar.prototype.getNombre = function () {
        return this.nombre;
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
    BarMan.prototype.getNombre = function () {
        return this.nombre;
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
    Trago.prototype.getNombre = function () {
        return this.nombre;
    };
    return Trago;
}());
exports.Trago = Trago;
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El Patio", 200);
bar1.setNombre("La casita");
console.log(bar1);
console.log(bar2);
console.log(bar1.getNombre());
var barMan1 = new BarMan("Carlos", "Ramirez");
var barMan2 = new BarMan("Juan", "Lopez");
barMan1.setNombre("Marcelo");
console.log(barMan1);
console.log(barMan2);
console.log(barMan1.getNombre());
var trago1 = new Trago("Piña Colada", "Blanco", 12);
var trago2 = new Trago("Fercho", "Negro", 3);
trago1.setNombre("Fernet");
console.log(trago1);
console.log(trago2);
console.log(trago1.getNombre());
