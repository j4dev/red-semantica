"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClsArco_1 = require("ClsArco");
class ClsGrafo {
    constructor() {
        this._Nodos = new Array();
        this._Arcos = new Array();
    }
    get Arcos() {
        return this._Arcos;
    }
    set Arcos(value) {
        this._Arcos = value;
    }
    get Nodo() {
        return this._Nodos;
    }
    set Nodo(value) {
        this._Nodos = value;
    }
    /**
     * agregarNodo
     */
    agregarNodo(nuevo) {
        this._Nodos.push(nuevo);
    }
    /**
     * conectarNodos
     */
    conectarNodos(padre, hijo) {
        this.Arcos.push(new ClsArco_1.ClsArco(padre, hijo));
    }
    /**
     * isConectado
     */
    isConectado() {
        this.Arcos.map(elemento => );
    }
}
//# sourceMappingURL=ClsGrafo.js.map