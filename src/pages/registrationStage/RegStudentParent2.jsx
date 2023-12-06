import "./RegStage.scss";
import { Link } from "react-router-dom";

function RegStudentParent2() {
    return (
        <>
            <div className="registrationStudentParent d-flex flex-column align-center">
                <h2>Регистрация в качестве родителя или ученика</h2>
                <p>
                    Проверьте ваши данные.
                    <br /> Если они не появились автоматически - введите вручную
                </p>
                <div className="d-flex flex-wrap align-center justify-between">
                    <div className="perc33Reg">
                        <p>Фамилия</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="Меслер" />
                        </div>
                    </div>
                    <div className="perc33Reg">
                        <p>Имя</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="Рома" />
                        </div>
                    </div>
                    <div className="perc33Reg">
                        <p>Отчество</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="Александрович" />
                        </div>
                    </div>
                    <div className="perc100Reg">
                        <p>Email</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="Mehrabbozorgi.business@gmail.com" />
                        </div>
                    </div>
                    <div className="perc100Reg">
                        <p>Адрес проживания</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="Улица Пушкина Дом 12" />
                        </div>
                    </div>
                    <div className="perc100Reg">
                        <p>Номер телефона</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="+7 (963) 231 23 12" />
                        </div>
                    </div>
                    <div className="perc33Reg">
                        <p>Город</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="Екатеринбург" />
                        </div>
                    </div>
                    <div className="perc33Reg">
                        <p>Школа</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="МАОУ СОШ №63" />
                        </div>
                    </div>
                    <div className="perc33Reg">
                        <p>Класс</p>
                        <div className="d-flex align-center justify-between">
                            <input type="text" placeholder="10Б" />
                        </div>
                    </div>
                </div>
                <Link to="/registration/password">
                    <button className="cu-p">Дальше</button>
                </Link>
            </div>
            <div className="codePicture1">
                <img
                    src="../src/assets/subRegistration/sixBlueBalls.svg"
                    alt="picture"
                    style={{ opacity: 0.9 }}
                />
            </div>
        </>
    );
}

export default RegStudentParent2;
