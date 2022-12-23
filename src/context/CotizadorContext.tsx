import {ChangeEvent, createContext} from "react";
import {ICotizador} from "../interfaces";

interface ContextProps {
    datos: ICotizador;
    resultado: string;
    cargando: boolean;

    // Methods
    handleChangeDatos: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    cotizarSeguro: () => void;
}

export const CotizadorContext = createContext({} as ContextProps);
