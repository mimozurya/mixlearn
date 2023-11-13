import React from "react";
import { Link } from "react-router-dom";
import "./Registration.scss";

const Registration = () => {
    return (
        <section className="container d-flex justify-center align-center clean">
            <div className="star">
                <img src="../../src/assets/registration/star.svg" />
            </div>
            <div className="registration">
                <div className="hello d-flex justify-center align-center flex-column">
                    <h1 className="hello-up">Добро пожаловать</h1>
                    <p className="hello-down">В мир нескучной учебы - MixLearn</p>
                </div>
                <div className="data-input d-flex flex-column align-center">
                    <input placeholder="Имя_пользователя" className="data-input-elem"></input>
                    <input placeholder="Пароль" className="data-input-elem"></input>
                    <Link to="/Homepage" className="clean">
                        <button className="data-input-elem data-input-elem-btn clean">Войти</button>
                    </Link>
                </div>
                <div className="register-user d-flex flex-column">
                    <h2>Зарегистрироваться как:</h2>
                    <div className="register-user-container">
                        <button>Ученик</button>
                        <button>Родитель</button>
                        <button>Администрация</button>
                        <button>Учитель</button>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <img
                    src="../../src/assets/registration/kids.jpg"
                    alt="kids"
                    width={801}
                    height={779}
                />
                {/* <div className="image"></div> */}
            </div>
        </section>
    );
};

export default Registration;
