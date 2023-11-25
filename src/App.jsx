import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Registration />} />
                <Route exact path="/homepage/*" element={<Homepage />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
