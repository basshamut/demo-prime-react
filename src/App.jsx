import './App.css'
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primereact/resources/primereact.min.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Login from "./components/Login.jsx";

export default function App() {
    return (
        <>
            <PrimeReactProvider>
            <Login></Login>
            </PrimeReactProvider>
        </>
    )
}
