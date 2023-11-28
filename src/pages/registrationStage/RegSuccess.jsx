import "./RegStage.scss";
import { Link } from "react-router-dom";

function RegSuccess() {
    return (
        <>
            <div className="successContainer d-flex flex-column align-center">
                <h2>Профиль создан успешно!</h2>
                <Link to="/homepage">
                    <button className="firstSuccess cu-p">Перейти на главную страницу</button>
                </Link>
                <div className="d-flex">
                    <img src="../src/assets/subRegistration/line.svg" alt="iconSuccess" />
                    <p>или</p>
                    <img src="../src/assets/subRegistration/line.svg" alt="iconSuccess" />
                </div>
                <Link to="/profile">
                    <button className="secondSuccess cu-p">Редактировать профиль</button>
                </Link>
            </div>
            <div className="codePicture3" style={{ opacity: 0.9, marginBottom: 128 }}>
                <img src="../src/assets/subRegistration/blueGearWheel.svg" alt="picture" />
            </div>
            <div className="codePicture1" style={{ opacity: 0.9 }}>
                <img
                    src="../src/assets/subRegistration/orangeFourStar.svg"
                    alt="picture"
                    width={200}
                    style={{ marginTop: 20 }}
                />
            </div>
            <div className="codePicture1" style={{ opacity: 0.9, marginTop: 30, marginLeft: 20 }}>
                <img src="../src/assets/subRegistration/orangeFourStar.svg" alt="picture" />
            </div>
        </>
    );
}

export default RegSuccess;
