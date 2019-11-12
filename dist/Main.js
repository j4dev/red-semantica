"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClsGrafo_1 = require("./ClsGrafo");
const ClsNodo_1 = require("./ClsNodo");
var grafo = new ClsGrafo_1.ClsGrafo;
/*
**Insertar nuevo nodo
*/
function insertarNodo() {
    var dato = document.querySelector("#insertar").value.toString();
    var nuevo = new ClsNodo_1.ClsNodo(dato);
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
//# sourceMappingURL=Main.js.map