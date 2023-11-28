import "./RegStage.scss";
import { Link } from "react-router-dom";

function RegTeacherAdmin2_1() {
    return (
        <>
            <div className="codeContainer d-flex flex-column align-center">
                <h2>Введите код, выданный вашей школой</h2>
                <p>Так мы сможем подтвердить вашу принадлежность к учебному предприятию</p>
                <div className="d-flex justify-between align-center">
                    <input type="text" placeholder="Введите код подтверждения" />
                    <img src="../src/assets/subRegistration/icon-success.svg" alt="iconSuccess" />
                </div>
                <Link to="/registration/teacher_admin">
                    <button className="cu-p">Дальше</button>
                </Link>
            </div>
            <div className="codePicture2">
                <img
                    src="../src/assets/subRegistration/purplePetal.svg"
                    alt="picture"
                    style={{ opacity: 1 }}
                />
            </div>
            <div className="codePicture4">
                <img
                    src="../src/assets/subRegistration/yellowSpiral.svg"
                    alt="picture"
                    style={{ opacity: 1 }}
                />
            </div>
        </>
    );
}

export default RegTeacherAdmin2_1;
