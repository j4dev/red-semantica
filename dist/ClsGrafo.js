"use strict";
var pregunta_texto = "";
class ClsArco {
    constructor(origen, destino, relacion) {
        this._Origen = origen;
        this._Destino = destino;
        this._Relacion = relacion;
    }
    get Relacion() {
        return this._Relacion;
    }
    set Relacion(value) {
        this._Relacion = value;
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
    conectarNodos(padre, hijo, relacion) {
        this.Arcos.push(new ClsArco(padre, hijo, relacion));
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
/*
**Metodos de acceso del html a las clases.
**
*/
function listarNodos() {
    var padre = document.getElementById("padre");
    var hijo = document.getElementById("hijo");
    grafo.Nodo.map(function (elemento) {
        var optionh = document.createElement("option");
        var optionp = document.createElement("option");
        optionh.innerHTML = optionp.innerHTML = elemento.Dato;
        padre.appendChild(optionp);
        hijo.appendChild(optionh);
    });
}
var grafo = new ClsGrafo;
/*
**Insertar nuevo nodo
*/
function insertarNodo() {
    let padre = document.getElementById("padre");
    let hijo = document.getElementById("hijo");
    var dato = document.querySelector("#insertar").value.toString();
    var nuevo = new ClsNodo(dato);
    grafo.agregarNodo(nuevo);
    document.getElementById("insertar").value = "";
    padre.innerHTML = "";
    hijo.innerHTML = "";
    console.log(grafo);
    listarNodos();
}
function conectarNodos() {
    var padre = document.querySelector("#padre").value.toString();
    var hijo = document.querySelector("#hijo").value.toString();
    var relacion = document.querySelector("#relacion").value.toString();
    if (!relacion) {
        document.querySelector("#texto").value = "Defina una relacion";
    }
    if (!hijo) {
        //let error = "<script>alert('Seleccione un hijo')</script>";
        document.querySelector("#texto").value = "Seleccione un Hijo";
    }
    if (!padre) {
        document.querySelector("#texto").value = "Seleccione un Padre";
    }
    var nodoPadre = null;
    grafo.Nodo.map(function (elemento) {
        if (padre == elemento.Dato) {
            nodoPadre = elemento;
        }
    });
    var nodoHijo = null;
    grafo.Nodo.map(function (elemento) {
        if (hijo == elemento.Dato) {
            nodoHijo = elemento;
        }
    });
    grafo.conectarNodos(nodoPadre, nodoHijo, relacion);
    crearPregunta(nodoPadre, nodoHijo, relacion);
    console.log(grafo);
}
function crearPregunta(nodoPadre, nodoHijo, relacion) {
    var pregunta = document.getElementById("pregunta");
    var option = document.createElement("option");
    option.innerHTML = option.innerHTML = nodoPadre.Dato + " " + relacion + " " + nodoHijo.Dato;
    pregunta_texto = nodoPadre.Dato + " " + relacion + " " + nodoHijo.Dato;
    pregunta.appendChild(option);
}
function respuestaPregunta() {
    var lista = "<li><b>Pregunta: </b>" + " ¿" + pregunta_texto + " ? " + "<b> Respuesta:</b>Si</li>";
    var listado = document.getElementById("texto");
    var t = "nodo es_un nodo2";
    var s = t.split(" ", 1);
    console.log(s);
    listado.innerHTML = lista;
}
//# sourceMappingURL=ClsGrafo.js.map