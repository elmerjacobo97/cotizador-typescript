import {ChangeEvent, FC, PropsWithChildren, useState} from "react";
import { CotizadorContext } from "./";
import {ICotizador} from "../interfaces";
import {calcularMarca, calcularPlan, formatearDinero, getDifferenceYear} from "../helpers";

export const CotizadorProvider: FC<PropsWithChildren> = ({children}) => {
    const [datos, setDatos] = useState<ICotizador>({
        marca: '',
        year: '',
        plan: ''
    });
    const [resultado, setResultado] = useState('');
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    // Cotizar
    const cotizarSeguro = () => {
        let result: number | string = 2000;

        // Obtener diferencia de años
        const difference = getDifferenceYear(datos.year);

        // Hay que restar el 3% por cada año
        result -= ((difference * 3) * result) / 100;

        result *= calcularMarca(datos.marca);
        result *= calcularPlan(datos.plan);
        result = formatearDinero(result);
        setCargando(true);

        setTimeout(() => {
            setResultado(result.toString());
            setCargando(false);
        }, 3000)
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                resultado,
                cargando,

                // Methods
                handleChangeDatos,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}
