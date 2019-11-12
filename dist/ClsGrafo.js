"use strict";
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
        this.Arcos.push(new ClsArco(padre, hijo));
    }
    /**
     * isConectado
     */
    isConectado(origen, destino) {
        this._Arcos.map(function (elemento) {
            if (elemento.Origen == origen && elemento.Destino == destino)
                return true;
        });
        return false;
    }
    /**
     * buscarNodo()    */
    buscarNodo(dato) {
        this._Nodos.map(function (elemento) {
            if (elemento.Dato == dato) {
                return elemento;
            }
        });
        return null;
    }
}
class ClsArco {
    constructor(origen, destino) {
        this._Origen = origen;
        this._Destino = destino;
    }
    get Destino() {
        return this._Destino;
    }
    set Destino(value) {
        this._Destino = value;
    }
    get Origen() {
        return this._Origen;
    }
    set Origen(value) {
        this._Origen = value;
    }
}
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
var grafo = new ClsGrafo;
/*
**Insertar nuevo nodo
*/
function insertarNodo() {
    var dato = document.querySelector("#insertar").value.toString();
    var nuevo = new ClsNodo(dato);
    grafo.agregarNodo(nuevo);
    console.log(grafo);
}
function conectarNodos() {
    var padre = document.querySelector("#padre").value.toString();
    var hijo = document.querySelector("#hijo").value.toString();
    if (!hijo) {
        //let error = "<script>alert('Seleccione un hijo')</script>";
        document.querySelector("#texto").value = "Seleccione un Hijo";
    }
    if (!padre) {
        document.querySelector("#texto").value = "Seleccione un Padre";
    }
    var nodoPadre = null;
    grafo.Nodo.map(function (elemento) {
        if (padre == elemento.Dato)
            nodoPadre = elemento;
    });
    var nodoHijo = null;
    grafo.Nodo.map(function (elemento) {
        if (hijo == elemento.Dato)
            nodoHijo = elemento;
    });
    grafo.conectarNodos(nodoPadre, nodoHijo);
    console.log(grafo);
}
//# sourceMappingURL=ClsGrafo.js.map