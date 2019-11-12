import { ClsGrafo } from "ClsGrafo";
import { ClsNodo } from "ClsNodo";

var grafo:ClsGrafo;

/*
**Insertar nuevo nodo
*/
function insertarNodo() {
    var dato = document.querySelector<HTMLInputElement>("#insertar").value.toString();
    var nuevo:ClsNodo = new ClsNodo(dato);
    grafo.agregarNodo(nuevo);

}

function conectarNodos() {
    var padre = document.querySelector<HTMLInputElement>("#padre").value.toString();
    var hijo = document.querySelector<HTMLInputElement>("#hijo").value.toString();

    if (!hijo) {
        //let error = "<script>alert('Seleccione un hijo')</script>";
        document.querySelector<HTMLInputElement>("#texto").value = "Seleccione un Hijo";
    }
    if (!padre) {
        document.querySelector<HTMLInputElement>("#texto").value = "Seleccione un Padre";
    }

    var nodoPadre:ClsNodo = null;
    grafo.Nodo.map(function (elemento:ClsNodo) {
        if(padre == elemento.Dato) nodoPadre = elemento;
    });
    var nodoHijo:ClsNodo = null;
    grafo.Nodo.map(function (elemento:ClsNodo) {
        if (hijo == elemento.Dato) nodoHijo = elemento;  
    });
    grafo.conectarNodos(nodoPadre,nodoHijo);
}