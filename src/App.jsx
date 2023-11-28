import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Registration from "./pages/registrationMain/Registration";
import Profile from "./pages/profile/Profile";

import RegPassword from "./pages/registrationStage/RegPassword";
import RegSuccess from "./pages/registrationStage/RegSuccess";
import RegStudentParent1 from "./pages/registrationStage/RegStudentParent1";
import RegStudentParent2 from "./pages/registrationStage/RegStudentParent2";
import RegTeacherAdmin1 from "./pages/registrationStage/RegTeacherAdmin1";
import RegTeacherAdmin2_0 from "./pages/registrationStage/RegTeacherAdmin2_0";
import RegTeacherAdmin2_1 from "./pages/registrationStage/RegTeacherAdmin2_1";
import RegTeacherAdmin3 from "./pages/registrationStage/RegTeacherAdmin3";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Registration />} />
                <Route exact path="/homepage/*" element={<Homepage />} />
                <Route exact path="/profile" element={<Profile />} />

                <Route
                    exact
                    path="/registration/code_school_parents_kids"
                    element={<RegStudentParent1 />}
                />
                <Route exact path="/registration/parents_kids" element={<RegStudentParent2 />} />
                <Route exact path="/registration/polling" element={<RegTeacherAdmin1 />} />
                <Route
                    exact
                    path="/registration/polling/rejection"
                    element={<RegTeacherAdmin2_0 />}
                />
                <Route
                    exact
                    path="/registration/code_school_teacher_admin"
                    element={<RegTeacherAdmin2_1 />}
                />
                <Route exact path="/registration/teacher_admin" element={<RegTeacherAdmin3 />} />
                <Route exact path="/registration/password" element={<RegPassword />} />
                <Route exact path="/registration/success" element={<RegSuccess />} />
            </Routes>
        </Router>
    );
}

export default App;
