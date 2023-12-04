import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Homepage from "../Homepage";
import styles from "./Registration.module.scss";
import SiteUserContext from "../../SiteUserContext";

function Registration() {
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [siteUser, setSiteUser] = useState({});
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
        const siteUser = user.find(
            (human) =>
                String(human.username) === String(username) &&
                String(human.password) === String(password)
        );
        if (siteUser) {
            setSiteUser(siteUser);
            setCanGo(true);
        }
    };

    return (
        <SiteUserContext.Provider value={{}}>
            <section className={styles.registrationContainer}>
                <div className={`${styles.container} d-flex justify-center align-center`}>
                    <div className={`${styles.registration} d-flex flex-column align-center`}>
                        <h1>Добро пожаловать!</h1>
                        <p>В мир нескучной учебы - MixLearn</p>
                        <div
                            className={`${styles.registrationButtons} d-flex flex-column justify-center align-center`}
                        >
                            <div
                                className={`${styles.icon} ${styles.username} d-flex align-center`}
                            >
                                <img src="../../src/assets/registration/user.svg" alt="user" />
                                <input
                                    placeholder="Имя_пользователя"
                                    type="text"
                                    onChange={(event) => setUsername(event.target.value)}
                                    value={username}
                                />
                            </div>
                            <div
                                className={`${styles.icon} ${styles.password} d-flex align-center`}
                            >
                                <img
                                    src="../../src/assets/registration/password.svg"
                                    alt="password"
                                />
                                <input
                                    placeholder="Пароль"
                                    type="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                />
                            </div>
                            <div className="d-flex justify-between">
                                {console.log(siteUser)}
                                {canGo ? (
                                    <Link to="/homepage">
                                        <button
                                            onClick={() =>
                                                console.log("малыш", siteUser) && (
                                                    <Homepage siteUser={siteUser.id} />
                                                )
                                            }
                                        >
                                            Удачи
                                        </button>
                                        {/* <Homepage siteUser={siteUser} /> */}
                                    </Link>
                                ) : (
                                    <>
                                        <button onClick={checkUserData}>Войти</button>
                                    </>
                                )}
                            </div>
                        </div>
                        <h2>Зарегистрироваться как:</h2>
                        <div
                            className={`${styles.registrationUser} d-flex justify-center align-center`}
                        >
                            <Link to="/registration/code_school_parents_kids">
                                <button className={`${styles.user} cu-p`}>Ученик</button>
                            </Link>

                            <Link to="/registration/code_school_parents_kids">
                                <button className={`${styles.user} cu-p`}>Родитель</button>
                            </Link>

                            <Link to="/registration/polling">
                                <button className={`${styles.user} cu-p`}>Администрация</button>
                            </Link>

                            <Link to="/registration/polling">
                                <button className={`${styles.user} cu-p`}>Учитель</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.children}>
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
                        className={styles.star}
                    />
                    <img
                        src="../../src/assets/registration/circle-1.png"
                        width={550}
                        height={276}
                        className={styles.circle}
                    />
                    <img
                        src="../../src/assets/registration/blueStar.svg"
                        width={200}
                        height={200}
                        className={styles.blueStar}
                    />
                    <img
                        src="../../src/assets/registration/purpleStar.png"
                        width={200}
                        height={200}
                        className={styles.purpleStar}
                    />
                </div>
            </section>
        </SiteUserContext.Provider>
    );
}

export default Registration;
