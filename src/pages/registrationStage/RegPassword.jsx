import "./RegStage.scss";
import { Link } from "react-router-dom";

function RegPassword() {
    return (
        <>
            <div className="passwordContainer d-flex align-center flex-column">
                <h2>Создайте пароль</h2>
                <div className="d-flex align-center justify-between">
                    <input type="password" placeholder="Введите пароль" />
                    <img src="../src/assets/subRegistration/icon-success.svg" alt="iconSuccess" />
                </div>
                <div className="d-flex align-center justify-between">
                    <input type="password" placeholder="Повторите пароль" />
                    <img src="../src/assets/subRegistration/icon-success.svg" alt="iconSuccess" />
                </div>
                <Link to="/registration/success">
                    <button className="cu-p">Дальше</button>
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
