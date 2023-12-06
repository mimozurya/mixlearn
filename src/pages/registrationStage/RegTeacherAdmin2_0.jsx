import "./RegStage.scss";
import { Link } from "react-router-dom";

function RegTeacherAdmin2_0() {
    return (
        <>
            <div className="noneOrganization d-flex align-center flex-column">
                <h2>Для регистрации учебной организации</h2>
                <p>Обратитесь в техническую поддержку MixLearn</p>
                <p>support@mixlearn.ru</p>
                <Link to="/">
                    <button className="cu-p">Вернуться на главную страницу</button>
                </Link>
            </div>
            <div className="codePicture2">
                <img src="../src/assets/subRegistration/starSun.svg" alt="picture" />
            </div>
            <div className="codePicture4">
                <img src="../src/assets/subRegistration/purpleOffWhite.svg" alt="picture" />
            </div>
            <div className="codePicture3">
                <img src="../src/assets/subRegistration/littleBlueStar.svg" alt="picture" />
            </div>
        </>
    );
}

export default RegTeacherAdmin2_0;
