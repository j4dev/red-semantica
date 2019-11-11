export class ClsNodo {

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