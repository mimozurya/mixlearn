import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import styles from "./Registration.module.scss";
import { useSiteUser } from "../../hooks/useSiteUser";
import { useDispatch, useSelector } from "react-redux";

function Registration() {
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { siteUser, setSiteUser } = useSiteUser();
    const [canGo, setCanGo] = useState(false);

    const dispatch = useDispatch();
    const id = useSelector((state) => state.id);

    const addId = () => {
        dispatch({ type: "ADD_ID", payload: +siteUser });
    };

    useEffect(() => {
        async function fetchData() {
            // const userResponce = await axios.get(
            //     "https://655e414a9f1e1093c59acfec.mockapi.io/user"
            // );
            const userResponce = await axios.get("http://79.174.83.190:8080/users");
            setUser(userResponce.data);
            console.log(userResponce.data);
        }

        fetchData();
        console.log(user);
    }, []);

    const checkUserData = () => {
        const foundUser = user.find(
            (human) =>
                String(human.username) === String(username) &&
                String(human.password) === String(password)
        );
        if (foundUser) {
            setSiteUser(`${foundUser.id}`);
            setCanGo(true);
        }
    };

    return (
        <section className={styles.registrationContainer}>
            <div className={`${styles.container} d-flex justify-center align-center`}>
                <div className={`${styles.registration} d-flex flex-column align-center`}>
                    <h1>Добро пожаловать!</h1>
                    <p>В мир нескучной учебы - MixLearn</p>
                    <div
                        className={`${styles.registrationButtons} d-flex flex-column justify-center align-center`}
                    >
                        <div className={`${styles.icon} ${styles.username} d-flex align-center`}>
                            <img src="../../src/assets/registration/user.svg" alt="user" />
                            <input
                                placeholder="Имя_пользователя"
                                type="text"
                                onChange={(event) => setUsername(event.target.value)}
                                value={username}
                            />
                        </div>
                        <div className={`${styles.icon} ${styles.password} d-flex align-center`}>
                            <img src="../../src/assets/registration/password.svg" alt="password" />
                            <input
                                placeholder="Пароль"
                                type="password"
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="d-flex justify-between">
                            {canGo ? (
                                <Link to="/homepage">
                                    <button onClick={() => addId()}>Удачи</button>
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
    );
}

export default Registration;
