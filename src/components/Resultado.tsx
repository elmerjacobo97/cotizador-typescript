import {Fragment, useCallback, useMemo, useRef} from "react";
import {useCotizador} from "../hooks";
import {MARCAS, PLANES} from "../constants";

export const Resultado = () => {
    const {resultado, datos} = useCotizador();
    const {year, plan, marca} = datos;
    const yearRef = useRef(year);

    const [nombreMarca] = useMemo(() => MARCAS.filter(m => m.id === Number(marca)), [resultado])
    const [nombrePlan] = useMemo(() => PLANES.filter(p => p.id === Number(plan)) , [resultado]);

    if (resultado === '') return  null;

    return (
        <div
            className='bg-gray-100 text-center mt-5 p-5 shadow-md rounded-lg animate__animated animate__fadeIn'
        >
            <h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>
            <p className='my-2'>
                <span className='font-bold'>Marca: </span>
                {nombreMarca?.name}
            </p>
            <p className='my-2'>
                <span className='font-bold'>Plan: </span>
                {nombrePlan?.name}
            </p>
            <Fragment>
                <p className='my-2'>
                    <span className='font-bold'>Año del Auto: </span>
                    {yearRef.current}
                </p>
            </Fragment>
            <p className='my-2 text-2xl'>
                <span className='font-bold'>Total Cotización: </span>
                {resultado}
            </p>
        </div>
    );
};