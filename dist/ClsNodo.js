"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClsNodo {
    constructor(dato, siguiente = null) {
        this._Dato = dato;
        this._Siguiente = null;
    }
    get Siguiente() {
        return this._Siguiente;
    }
    set Siguiente(value) {
        this._Siguiente = value;
    }
    get Dato() {
        return this._Dato;
    }
    set Dato(value) {
        this._Dato = value;
    }
}
exports.ClsNodo = ClsNodo;
//# sourceMappingURL=ClsNodo.js.map