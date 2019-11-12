import { ClsArco } from "ClsArco";
import { ClsNodo } from "ClsNodo";

export class ClsGrafo {

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