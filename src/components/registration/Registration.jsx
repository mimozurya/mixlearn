import React from "react";
import { Link } from "react-router-dom";
import "./Registration.scss";

const Registration = () => {
    return (
        <section>
            <div className="container d-flex justify-center align-center">
                <div className="registration d-flex flex-column align-center">
                    <h1>Добро пожаловать!</h1>
                    <p>В мир нескучной учебы - MixLearn</p>
                    <div className="registration-buttons d-flex flex-column justify-center align-center">
                        <div className="icon username d-flex align-center">
                            <img src="../../src/assets/registration/user.svg" alt="user" />
                            <input placeholder="Имя_пользователя" type="text" />
                        </div>
                        <div className="icon password d-flex align-center">
                            <img src="../../src/assets/registration/password.svg" alt="password" />
                            <input placeholder="Пароль" type="text" />
                        </div>
                        <Link to="/Homepage" className="clean">
                            <button>Войти</button>
                        </Link>
                    </div>
                    <h2>Зарегистрироваться как:</h2>
                    <div className="registration-user d-flex justify-center align-center">
                        <button className="user">Ученик</button>
                        <button className="user">Родитель</button>
                        <button className="user">Администрация</button>
                        <button className="user">Учитель</button>
                    </div>
                </div>
                <div className="children">
                    <img
                        src="../../src/assets/registration/children-with-cap.png"
                        width={801}
                        height={779}
                    />
                </div>
                <img
                    src="../../src/assets/registration/star.svg"
                    width={447}
                    height={447}
                    className="star"
                />
                <img
                    src="../../src/assets/registration/circle-1.png"
                    width={550}
                    height={276}
                    className="circle"
                />
                <img
                    src="../../src/assets/registration/blueStar.svg"
                    width={200}
                    height={200}
                    className="blueStar"
                />
                <img
                    src="../../src/assets/registration/purpleStar.png"
                    width={200}
                    height={200}
                    className="purpleStar"
                />
            </div>
        </section>
    );
};

export default Registration;
