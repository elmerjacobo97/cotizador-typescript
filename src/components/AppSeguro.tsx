import {Formulario, Spinner, Resultado} from "./";
import {useCotizador} from "../hooks";

export const AppSeguro = () => {
    const {cargando, resultado} = useCotizador();
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">
                    Cotizador de Seguros de Auto
                </h1>
            </header>
            <main
                className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-md rounded-md p-10 animate__animated animate__fadeIn"
            >
                <Formulario />
                {
                    cargando ? <Spinner /> : <Resultado />
                }
            </main>
        </>
    );
};
