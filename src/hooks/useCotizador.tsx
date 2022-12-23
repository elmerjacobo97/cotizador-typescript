import {useContext} from "react";
import {CotizadorContext} from "../context";

export const useCotizador = () => {
    return useContext(CotizadorContext);
}
