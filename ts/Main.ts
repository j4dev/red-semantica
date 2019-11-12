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
    if () {
        
    }
}