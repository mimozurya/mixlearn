import { useState } from "react";
import "./index.css";
import Homepage from "./components/home-page/Homepage";
import Registration from "./components/registration/Registration";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Registration />} />
                <Route exact path="/Homepage" element={<Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;
