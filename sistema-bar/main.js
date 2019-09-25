"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    return Trago;
}());
exports.Trago = Trago;
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El Patio", 200);
console.log(bar1);
console.log(bar2);
var barMan1 = new BarMan("Carlos", "Ramirez");
var barMan2 = new BarMan("Juan", "Lopez");
console.log(barMan1);
console.log(barMan2);
var trago1 = new Trago("Piña Colada", "Blanco", 12);
var trago2 = new Trago("Fercho", "Negro", 3);
console.log(trago1);
console.log(trago2);
