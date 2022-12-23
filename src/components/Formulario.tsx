import {FormEvent, Fragment} from "react";
import { toast } from 'react-toastify';
import {useCotizador} from "../hooks";
import {MARCAS, PLANES, YEARS} from "../constants";

export const Formulario = () => {
    const {datos, handleChangeDatos, cotizarSeguro} = useCotizador();
    const {marca, year} = datos;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(datos).includes('')) {
            toast.warn('Por Favor, llena todos los campos', {
                position: "bottom-center",
                autoClose: 3000,
            });
            return;
        }

        // Cotizar seguro
        cotizarSeguro();
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className='mb-2'>
                <label
                    htmlFor='marca'
                    className='block font-bold text-gray-400'
                >
                    Marca
                </label>
                <select
                    name='marca'
                    id='marca'
                    className='w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:border-indigo-500
                        focus:ring-1 focus:ring-indigo-500 transition'
                    value={marca}
                    onChange={handleChangeDatos}
                >
                    <option value=''>--Selecciona Marca--</option>
                    {MARCAS.map(({id, name}) => (
                        <option key={id} value={id}>{name}</option>
                    ))}
                </select>
            </div>

            <div className='mb-2'>
                <label
                    htmlFor='year'
                    className='block font-bold text-gray-400'
                >
                    Año
                </label>
                <select
                    name='year'
                    id='year'
                    className='w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:border-indigo-500
                        focus:ring-1 focus:ring-indigo-500 transition'
                    value={year}
                    onChange={handleChangeDatos}
                >
                    <option value=''>--Selecciona Año--</option>
                    {YEARS.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className='mb-4'>
                <label className='block font-bold text-gray-400'>
                    Elige un Plan
                </label>
                <div className='flex gap-3 items-center'>
                    {PLANES.map(({id, name}) => (
                        <Fragment key={id}>
                            <label>{name}</label>
                            <input
                                type="radio"
                                name="plan"
                                value={id}
                                onChange={handleChangeDatos}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>

            <button
                type='submit'
                className='w-full bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white px-3 py-2
                    font-bold rounded-lg'
            >
                Cotizar
            </button>
        </form>
    );
};
