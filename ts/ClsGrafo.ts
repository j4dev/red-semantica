import { ClsArco } from "ClsArco";
import { ClsNodo } from "ClsNodo";

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
    public isConectado():boolean {
        this.Arcos.map(elemento=>)
    }
}