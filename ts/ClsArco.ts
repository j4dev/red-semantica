import { ClsNodo } from "ClsNodo";

export class ClsArco {

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