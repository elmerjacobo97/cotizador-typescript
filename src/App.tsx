import {AppSeguro} from "./components";
import {CotizadorProvider} from "./context";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <CotizadorProvider>
            <AppSeguro />
            <ToastContainer />
        </CotizadorProvider>
    )
}

export default App
