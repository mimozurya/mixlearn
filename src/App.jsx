import React from "react";
import Homepage from "./pages/Homepage";
import Registration from "./pages/registration/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Registration />} />
                <Route exact path="/homepage/*" element={<Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;
