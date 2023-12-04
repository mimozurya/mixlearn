import Article from "../components/Article";
import AppContext from "../MainContext";
import { useContext } from "react";

import Notification from "../components/Notification";

function News() {
    const { isLoading, setArticleTextId, onClickNotification, setOnClickNotification } =
        useContext(AppContext);

    return (
        <section className="information">
            <div className="header d-flex align-center justify-between">
                <div className="search d-flex aling-center">
                    <img src="../src/assets/search.svg" alt="search" />
                    <input type="text" placeholder="Поиск..." />
                </div>
                <div
                    className="d-flex flex-column align-center"
                    onClick={() => setOnClickNotification(!onClickNotification)}
                >
                    <img src="../src/assets/bell.svg" alt="notification" className="notification" />
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
                <h2>Рекомендованные курсы только для тебя</h2>
                <div className="courses-photo d-flex justify-center ">
                    <div className="courses-photo-block">
                        <div className="short-des">
                            <p>
                                <b>85</b> мин
                            </p>
                        </div>
                        <div id="short-tagging">
                            <p>Учу ездить на шее у родителей до 35 лет!!!</p>
                        </div>
                        <img src="../src/assets/girl.png" alt="girl" />
                    </div>
                    <div className="courses-photo-block">
                        <div className="short-des">
                            <p>
                                <b>105</b> мин
                            </p>
                        </div>
                        <div id="short-tagging2">
                            <p>Курс по черчению для бушующих архитекторов!</p>
                        </div>
                        <img src="../src/assets/learn.png" alt="learn" />
                    </div>
                </div>
            </div>
            {onClickNotification && <Notification />}
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
            <div className="news-article d-flex justify-center">{!isLoading && <Article />}</div>
        </section>
    );
}

export default News;
