import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.id.id);

    useEffect(() => {
        async function fetchDataUser() {
            const userResponceProfile = await axios.get(
                `https://655e414a9f1e1093c59acfec.mockapi.io/user/${userId}`
            );

            setUser(userResponceProfile.data);
            setIsLoading(false);
        }

        fetchDataUser();
    }, []);

    return (
        <>
            {isLoading ? (
                <span className={styles.loader}></span>
            ) : (
                <div className={`${styles.profile} d-flex justify-between`}>
                    <section className={styles.avatar}>
                        <div className={styles.avatarFrame}>
                            <img
                                src="../../src/assets/profile/ellipse.svg"
                                alt="ellipse"
                                className={styles.avatarEllipse}
                                width={110}
                            />
                            <img
                                src="../../src/assets/profile/bluepict.svg"
                                alt="bluepict"
                                className={styles.avatarBluepict}
                                width={100}
                            />
                        </div>
                        <div className={styles.avatarFrameBottom}>
                            <img
                                src="../../src/assets/profile/human.png"
                                alt="human"
                                width={240}
                                className={styles.avatarHuman}
                            />
                        </div>
                        <div className={styles.avatarFrameTop}>
                            <div className={styles.frameTopHeader}>
                                <h2>{user.name}</h2>
                                <p>ilovebeats@gmail.com</p>
                            </div>
                            <div className={styles.frameTopInfo}>
                                <h3>Ученик №1232</h3>
                                <p>Школа: №4</p>
                                <p>Класс: 5Б</p>
                            </div>
                            <div className={styles.frameTopFooter}>
                                <h3>Статус: Школьник новичочек</h3>
                            </div>
                        </div>
                        <img
                            src="../../src/assets/avatar.svg"
                            alt="lvl"
                            className={styles.avatarLvl}
                            width={100}
                        />
                        <div className={styles.avatarReplacePhoto}>
                            <button>Изменить фото</button>
                        </div>
                    </section>
                    <section className={styles.information}>
                        <header>
                            <h2>Изменить профиль</h2>
                        </header>
                        <div className={`${styles.infoInputs} d-flex flex-wrap justify-between`}>
                            <div className={styles.input50perc}>
                                <p>Имя</p>
                                <div className={`${styles.input50} d-flex`}>
                                    <input type="text" placeholder="Рома" />
                                </div>
                            </div>
                            <div className={styles.input50perc}>
                                <p>Фамилия</p>
                                <div className={`${styles.input50} d-flex`}>
                                    <input type="text" placeholder="Меслер" />
                                </div>
                            </div>
                            <div className={styles.input100perc}>
                                <p>Email</p>
                                <div className={`${styles.input100} d-flex`}>
                                    <input
                                        type="text"
                                        placeholder="Mehrabbozorgi.business@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className={styles.input100perc}>
                                <p>Адрес проживания</p>
                                <div className={`${styles.input100} d-flex`}>
                                    <input type="text" placeholder="Улица Пушкина Дом 12" />
                                </div>
                            </div>
                            <div className={styles.input100perc}>
                                <p>Номер телефона</p>
                                <div className={`${styles.input100} d-flex`}>
                                    <input type="text" placeholder="+7 (963) 231 23 12" />
                                </div>
                            </div>
                            <div className={styles.input50perc}>
                                <p>Город</p>
                                <div className={`${styles.input50} d-flex`}>
                                    <input type="text" placeholder="Верхняя Салда" />
                                </div>
                            </div>
                            <div className={styles.input50perc}>
                                <p>Страна</p>
                                <div className={`${styles.input50} d-flex`}>
                                    <input type="text" placeholder="Россия" />
                                </div>
                            </div>
                            <div className={styles.input100perc}>
                                <p>Пароль</p>
                                <div className={`${styles.input100} d-flex`}>
                                    <input type="text" placeholder="**********" />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.infoButtons} d-flex align-center justify-end`}>
                            <Link to="/homepage">
                                <button className={`${styles.infoBtnReset} cu-p`}>Вернуться</button>
                            </Link>
                            <button className={`${styles.infoBtnSave} cu-p`}>Сохранить</button>
                        </div>
                    </section>
                    <section className={styles.images}>
                        <img
                            src="../../src/assets/profile/star.svg"
                            alt="star"
                            width={447}
                            className={styles.star}
                        />
                        <img
                            src="../../src/assets/profile/circle.svg"
                            alt="circle"
                            width={550}
                            className={styles.circle}
                        />
                        <img
                            src="../../src/assets/profile/blueStar.svg"
                            alt="blueStar"
                            width={200}
                            className={styles.blueStar}
                        />
                    </section>
                </div>
            )}
        </>
    );
}

export default Profile;
