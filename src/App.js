import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Repertoire from './Components/RepertoirePage';

import Info from './Components/InfoPage'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'
import TicketsPage from "./Components/TicketsPage";
function App() {

    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/repertoire" element={<Repertoire/>} />
                    <Route path="/info" element={<Info/>}/>
                    <Route path="/tickets" element={<TicketsPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
