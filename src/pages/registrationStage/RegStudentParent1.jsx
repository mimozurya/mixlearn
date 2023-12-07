import { useState } from "react";
import "./RegStage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function RegStudentParent1() {
    const dispatch = useDispatch();
    const newUser = useSelector((state) => state.user);

    const addCategory = () => {
        dispatch({ type: "ADD_CATEGORY", payload: "Ученик/родитель" });
    };

    return (
        <>
            <div className="codeContainer d-flex flex-column align-center">
                <h2>Введите код, выданный вашей школой</h2>
                <p>Так мы сможем подтвердить вашу принадлежность к учебному предприятию</p>
                <div className="d-flex justify-between align-center">
                    <input type="text" placeholder="Введите код подтверждения" />
                    <img src="../src/assets/subRegistration/icon-success.svg" alt="iconSuccess" />
                </div>
                <Link to="/registration/parents_kids">
                    <button className="cu-p" onClick={() => addCategory()}>
                        Дальше
                    </button>
                </Link>
            </div>
            <div className="codePicture2">
                <img src="../src/assets/subRegistration/twoSemiCircles.svg" alt="picture" />
            </div>
            <div className="codePicture4">
                <img src="../src/assets/subRegistration/bigPurpleStar.svg" alt="picture" />
            </div>
        </>
    );
}

export default RegStudentParent1;
