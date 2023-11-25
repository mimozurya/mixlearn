import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Registration.scss";
import { useState, useEffect } from "react";
import Homepage from "../Homepage";

function Registration() {
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [canGo, setCanGo] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const userResponce = await axios.get(
                "https://655e414a9f1e1093c59acfec.mockapi.io/user"
            );
            setUser(userResponce.data);
        }

        fetchData();
    }, []);

    const checkUserData = () => {
        user.some(
            (human) =>
                String(human.username) === String(username) &&
                String(human.password) === String(password)
        ) && setCanGo(true);
    };

    return (
        <section className="registration-container">
            <div className="container d-flex justify-center align-center">
                <div className="registration d-flex flex-column align-center">
                    <h1>Добро пожаловать!</h1>
                    <p>В мир нескучной учебы - MixLearn</p>
                    <div className="registration-buttons d-flex flex-column justify-center align-center">
                        <div className="icon username d-flex align-center">
                            <img src="../../src/assets/registration/user.svg" alt="user" />
                            <input
                                placeholder="Имя_пользователя"
                                type="text"
                                onChange={(event) => setUsername(event.target.value)}
                                value={username}
                            />
                        </div>
                        <div className="icon password d-flex align-center">
                            <img src="../../src/assets/registration/password.svg" alt="password" />
                            <input
                                placeholder="Пароль"
                                type="password"
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="d-flex justify-between">
                            {!canGo ? (
                                <Link to="/homepage" className="clean">
                                    <button>Удачи!</button>
                                </Link>
                            ) : (
                                <>
                                    <button onClick={checkUserData}>Войти</button>
                                    <button>Зарегистрироваться</button>
                                </>
                            )}
                        </div>
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
}

export default Registration;
