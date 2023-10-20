import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import RepertoirePage from './Components/RepertoirePage';
import TicketBookingPage from './Components/TicketBookingPage';
import EventsCalendarPage from './Components/EventsCalendarPage';
import NavBar from './Components/NavBar';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/repertoire" element={<RepertoirePage/>} />
                    <Route path="/ticket-booking" element={<TicketBookingPage/>}/>
                    <Route path="/events-calendar" element={<EventsCalendarPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
