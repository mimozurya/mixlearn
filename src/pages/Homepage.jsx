import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.scss";
import Article from "../components/Article";

function Homepage() {
    const [articleText, setArticleText] = useState([]);
    const [articleTextId, setArticleTextId] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const articleResponce = await axios.get(
                "https://6558a622e93ca47020a98ea9.mockapi.io/paragraph"
            );
            setIsLoading(false);
            setArticleText(articleResponce.data);
        }

        fetchData();
    }, []);

    const callArticle = (key) => {
        <Article articleText={articleText} />;
    };

    return (
        <div className="home-page">
            <div className="container-home d-flex justify-around">
                <nav className="navigation d-flex flex-column align-center">
                    <div className="avatar d-flex align-center justify-around">
                        <img src="../src/assets/avatar.svg" width={131} height={131} />
                        <p>Имя Фамилия</p>
                    </div>
                    <div className="option">
                        <ul className="d-flex flex-column align-start">
                            <li className="d-flex">
                                <img
                                    src="../src/assets/news.svg"
                                    alt="news-logo"
                                    width={31}
                                    height={31}
                                />
                                Новости
                            </li>
                            <li className="d-flex">
                                <img
                                    src="../src/assets/chat.svg"
                                    alt="chat-logo"
                                    width={31}
                                    height={31}
                                />
                                Чаты
                            </li>
                            <li className="d-flex">
                                <img
                                    src="../src/assets/calendar.svg"
                                    alt="calendar-logo"
                                    width={31}
                                    height={31}
                                />
                                Календарь
                            </li>
                            <li className="d-flex">
                                <img
                                    src="../src/assets/graduation.svg"
                                    alt="graduation-logo"
                                    width={31}
                                    height={31}
                                />
                                Обучение
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="information">
                    <div className="header d-flex align-center justify-between">
                        <div className="search d-flex aling-center">
                            <img src="../src/assets/search.svg" alt="search" />
                            <input type="text" placeholder="Поиск..." />
                        </div>
                        <div className="d-flex flex-column align-center">
                            <img
                                src="../src/assets/bell.svg"
                                alt="notification"
                                className="notification"
                            />
                            <div className="notification-count">
                                <p>12</p>
                            </div>
                        </div>
                        <img
                            src="../src/assets/avatar.svg"
                            alt="lvl"
                            width={108}
                            height={108}
                            className="lvl"
                        />
                    </div>
                    <div className="courses">
                        <h2 className="mb-40">Рекомендованные курсы только для тебя</h2>
                        <div className="courses-photo d-flex justify-center ">
                            <div className="courses-photo-block">
                                <div className="short-des">
                                    <p>85 мин</p>
                                </div>
                                <div id="short-tagging">
                                    <p>Учу ездить на шее у родителей до 35 лет!!!</p>
                                </div>
                                <img src="../src/assets/girl.png" alt="girl" />
                            </div>
                            <div className="courses-photo-block">
                                <div className="short-des">
                                    <p>105 мин</p>
                                </div>
                                <div id="short-tagging2">
                                    <p>Курс по черчению для бушующих архитекторов!</p>
                                </div>
                                <img src="../src/assets/learn.png" alt="learn" />
                            </div>
                        </div>
                    </div>
                    <div className="news">
                        <h2>Новости твоей школы!</h2>
                        <div className="news-selector d-flex justify-center">
                            <div
                                className="d-flex flex-column align-center cu-p"
                                onClick={() => setArticleTextId(1)}
                            >
                                <img src="../src/assets/jenga.jpg" alt="jenga" />
                                <div className="news-data">
                                    <p>20.03.23</p>
                                </div>
                            </div>
                            <div
                                className="d-flex flex-column align-center cu-p"
                                onClick={() => setArticleTextId(2)}
                            >
                                <img src="../src/assets/lamp.png" alt="lamp" />
                                <div className="news-data">
                                    <p>23.02.23</p>
                                </div>
                            </div>
                            <div
                                className="d-flex flex-column align-center cu-p"
                                onClick={() => setArticleTextId(3)}
                            >
                                <img src="../src/assets/guitar.png" alt="guitar" />
                                <div className="news-data">
                                    <p>27.05.23</p>
                                </div>
                            </div>
                            <div
                                className="d-flex flex-column align-center cu-p"
                                onClick={() => setArticleTextId(4)}
                            >
                                <img src="../src/assets/shy-girl.png" alt="shy-girl" />
                                <div className="news-data">
                                    <p>23.02.23</p>
                                </div>
                            </div>
                            <div
                                className="d-flex flex-column align-center cu-p"
                                onClick={() => setArticleTextId(5)}
                            >
                                <img src="../src/assets/cinema.png" alt="cinema" />
                                <div className="news-data">
                                    <p>23.02.23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news-article d-flex justify-center">
                        {!isLoading ? (
                            <Article
                                articleText={articleText}
                                articleTextId={articleTextId}
                                isLoading={isLoading}
                            />
                        ) : (
                            console.log("жди")
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Homepage;
