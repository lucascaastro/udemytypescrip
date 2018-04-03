"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    //examplo simplificado de construção de uma classe 
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
