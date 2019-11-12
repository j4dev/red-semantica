class ClsGrafo {

    private _Nodos: Array<ClsNodo>;
    private _Arcos: Array<ClsArco>;

    public get Arcos(): Array<ClsArco> {
        return this._Arcos;
    }
    public set Arcos(value: Array<ClsArco>) {
        this._Arcos = value;
    }
    public get Nodo(): Array<ClsNodo> {
        return this._Nodos;
    }
    public set Nodo(value: Array<ClsNodo>) {
        this._Nodos = value;
    }

    constructor() {
        this._Nodos = new Array<ClsNodo>();
        this._Arcos = new Array<ClsArco>();
    }

    /**
     * agregarNodo
     */
    public agregarNodo(nuevo:ClsNodo) {
        this._Nodos.push(nuevo);
    }

    /**
     * conectarNodos
     */
    public conectarNodos(padre:ClsNodo, hijo:ClsNodo) {
        this.Arcos.push(new ClsArco(padre,hijo));
    }

    /**
     * isConectado
     */
    public isConectado(origen:ClsNodo, destino:ClsNodo):boolean {
        this._Arcos.map(function(elemento:ClsArco){
            if (elemento.Origen == origen && elemento.Destino == destino) 
                return true;
        });
        return false;
    }

    /**
     * buscarNodo()    */
    public buscarNodo(dato:string):any {
        this._Nodos.map(function(elemento:ClsNodo) {
            if (elemento.Dato == dato) {
                return elemento;
            }
        });

        return null;
    }

}

class ClsArco {

    private _Origen: ClsNodo;
    private _Destino: ClsNodo;

    public get Destino(): ClsNodo {
        return this._Destino;
    }
    public set Destino(value: ClsNodo) {
        this._Destino = value;
    }
    public get Origen(): ClsNodo {
        return this._Origen;
    }
    public set Origen(value: ClsNodo) {
        this._Origen = value;
    }

    constructor(origen:ClsNodo, destino:ClsNodo) {
        this._Origen = origen;
        this._Destino = destino;
    }
}

class ClsNodo {

    private _Dato: string;
    private _Siguiente: ClsNodo;

    public get Siguiente(): ClsNodo {
        return this._Siguiente;
    }
    public set Siguiente(value: ClsNodo) {
        this._Siguiente = value;
    }
    public get Dato(): string {
        return this._Dato;
    }
    public set Dato(value: string) {
        this._Dato = value;
    }
    constructor(dato:string,siguiente:ClsNodo = null) {
        this._Dato = dato;
        this._Siguiente = null;
    }
}

var grafo = new ClsGrafo;

/*
**Insertar nuevo nodo
*/
function insertarNodo() {
    var dato = document.querySelector<HTMLInputElement>("#insertar").value.toString();
    var nuevo:ClsNodo = new ClsNodo(dato);
    grafo.agregarNodo(nuevo);
    console.log(grafo);
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
    console.log(grafo);
}