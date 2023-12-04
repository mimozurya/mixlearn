import { useContext } from "react";
import AppContext from "../MainContext";
import ContentLoader, { List } from "react-content-loader";
import { Link } from "react-router-dom";
import SiteUserContext from "../SiteUserContext";

function Navigation() {
    const { isLoading } = useContext(AppContext);

    return (
        <nav className="navigation d-flex flex-column align-center">
            {isLoading ? (
                <ContentLoader
                    speed={0.5}
                    width={440}
                    height={600}
                    viewBox="0 0 440 600"
                    backgroundColor="#f4d6ff"
                    foregroundColor="#ffffff"
                >
                    <circle cx="151" cy="347" r="2" />
                    <rect x="0" y="16" rx="100" ry="100" width="203" height="196" />
                    <rect x="2" y="308" rx="25" ry="25" width="400" height="50" />
                    <rect x="4" y="370" rx="25" ry="25" width="400" height="50" />
                    <rect x="4" y="431" rx="25" ry="25" width="400" height="50" />
                    <rect x="208" y="96" rx="51" ry="51" width="189" height="107" />
                    <rect x="3" y="249" rx="25" ry="25" width="400" height="50" />
                </ContentLoader>
            ) : (
                <>
                    <div className="clear">
                        <Link to="/profile" className="clear">
                            <div className="avatar d-flex align-center justify-around">
                                <img src="../src/assets/avatar.svg" width={130} height={130} />
                                <p>Имя Фамилия</p>
                            </div>
                        </Link>
                    </div>
                    <div className="option">
                        <ul className="d-flex flex-column align-start clear">
                            <Link to="" className="">
                                <li className="d-flex cu-p">
                                    <img
                                        src="../src/assets/news.svg"
                                        alt="news-logo"
                                        width={31}
                                        height={31}
                                    />
                                    Новости
                                </li>
                            </Link>
                            <Link to="chats">
                                <li className="d-flex cu-p">
                                    <img
                                        src="../src/assets/chat.svg"
                                        alt="chat-logo"
                                        width={31}
                                        height={31}
                                    />
                                    Чаты
                                </li>
                            </Link>
                            <Link to="calendar">
                                <li className="d-flex cu-p">
                                    <img
                                        src="../src/assets/calendar.svg"
                                        alt="calendar-logo"
                                        width={31}
                                        height={31}
                                    />
                                    Календарь
                                </li>
                            </Link>
                            <Link to="study">
                                <li className="d-flex cu-p">
                                    <img
                                        src="../src/assets/graduation.svg"
                                        alt="graduation-logo"
                                        width={31}
                                        height={31}
                                    />
                                    Обучение
                                </li>
                            </Link>
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
}

export default Navigation;
