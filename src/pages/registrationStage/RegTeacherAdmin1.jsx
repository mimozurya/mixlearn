import "./RegStage.scss";
import { Link } from "react-router-dom";

function RegTeacherAdmin1() {
    return (
        <>
            <div className="mixLearnTeacher d-flex flex-column align-center">
                <h2>Ваша образовательная организация зарегистрирована на MixLearn?</h2>
                <div className="d-flex align-center">
                    <Link to="/registration/code_school_teacher_admin">
                        <button className="mixLearnFirstBtn cu-p">Да</button>
                    </Link>
                    <Link to="/registration/polling/rejection">
                        <button className="mixLearnSecondBtn cu-p">Нет</button>
                    </Link>
                </div>
            </div>
            <div className="codePicture1">
                <img
                    src="../src/assets/subRegistration/gradientFourStar.svg"
                    alt="picture"
                    style={{ opacity: 1 }}
                />
            </div>
            <div className="codePicture3">
                <img
                    src="../src/assets/subRegistration/littleBlueStar.svg"
                    alt="picture"
                    style={{ opacity: 1 }}
                />
            </div>
        </>
    );
}

export default RegTeacherAdmin1;
