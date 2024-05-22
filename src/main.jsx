import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import necessary components
import App from './App.jsx';
import Dashboard from "./pages/Dashboard.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<App/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
);
