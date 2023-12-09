import "./RegStage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function RegPassword() {
    const [userPassword, setUserPassword] = useState();
    const [repeatUserPassword, setRepeatUserPassword] = useState();
    const [flag, setFlag] = useState(false);

    const dispatch = useDispatch();
    const newUser = useSelector((state) => state.user);
    console.log(newUser);

    const addPassword = () => {
        dispatch({ type: "ADD_PASSWORD", payload: userPassword });
    };

    return (
        <>
            <div className="passwordContainer d-flex align-center flex-column">
                <h2>Создайте пароль</h2>
                <div className="d-flex align-center justify-between">
                    <input
                        type="text"
                        placeholder="Введите пароль"
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    {flag && (
                        <img
                            src="../src/assets/subRegistration/icon-success.svg"
                            alt="iconSuccess"
                        />
                    )}
                </div>
                <div className="d-flex align-center justify-between">
                    <input
                        type="text"
                        placeholder="Повторите пароль"
                        onChange={(e) => setRepeatUserPassword(e.target.value)}
                    />
                    {flag && (
                        <img
                            src="../src/assets/subRegistration/icon-success.svg"
                            alt="iconSuccess"
                        />
                    )}
                </div>
                <Link to="/registration/success">
                    <button className="cu-p" onClick={() => addPassword()}>
                        Дальше
                    </button>
                </Link>
            </div>
            <div className="codePicture1" style={{ opacity: 0.9 }}>
                <img src="../src/assets/subRegistration/azureStar.svg" alt="picture" />
            </div>
            <div className="codePicture4" style={{ opacity: 0.7 }}>
                <img src="../src/assets/subRegistration/azureChess.svg" alt="picture" />
            </div>
            <div className="codePicture3" style={{ opacity: 0.9 }}>
                <img src="../src/assets/subRegistration/littleBlueStar.svg" alt="picture" />
            </div>
        </>
    );
}

export default RegPassword;
