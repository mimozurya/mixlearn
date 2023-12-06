import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.scss";
import AppContext from "../MainContext";
import { Routes, Route } from "react-router-dom";
import ContentLoader from "react-content-loader";

import Navigation from "../components/Navigation";
import News from "./News";
import Chats from "./Chats";
import Calendar from "./Calendar";
import Study from "./Study";
import { useSiteUser } from "../hooks/useSiteUser";
import { useDispatch, useSelector } from "react-redux";

function Homepage(props) {
    const [articleText, setArticleText] = useState([]);
    const [articleTextId, setArticleTextId] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [onClickNotification, setOnClickNotification] = useState(false);

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.id);
    console.log(userId, "home");

    useEffect(() => {
        async function fetchData() {
            const articleResponce = await axios.get(
                "https://655e414a9f1e1093c59acfec.mockapi.io/article"
            );
            setIsLoading(false);
            setArticleText(articleResponce.data);
        }

        fetchData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                articleText,
                articleTextId,
                isLoading,
                onClickNotification,
                setArticleTextId,
                setOnClickNotification,
            }}
        >
            <div className="home-page">
                {isLoading ? (
                    <div className="container-home d-flex justify-around">
                        <ContentLoader
                            speed={1}
                            width={1900}
                            height={1000}
                            viewBox="0 0 1900 1000"
                            backgroundColor="#dedede"
                            foregroundColor="#ffffff"
                        >
                            <circle cx="73" cy="83" r="73" />
                            <rect x="173" y="40" rx="25" ry="25" width="229" height="106" />
                            <rect x="100" y="219" rx="27" ry="27" width="239" height="75" />
                            <rect x="100" y="307" rx="27" ry="27" width="239" height="75" />
                            <rect x="100" y="391" rx="27" ry="27" width="239" height="75" />
                            <rect x="100" y="479" rx="27" ry="27" width="239" height="75" />
                            <rect x="451" y="0" rx="93" ry="93" width="1450" height="1000" />
                        </ContentLoader>
                    </div>
                ) : (
                    <div className="container-home d-flex justify-around">
                        {/* {console.log(siteUser, "homepage")} */}
                        <Navigation />
                        <Routes>
                            <Route exact path="" element={<News />} />
                            <Route exact path="chats" element={<Chats />} />
                            <Route exact path="calendar" element={<Calendar />} />
                            <Route exact path="study" element={<Study />} />
                        </Routes>
                    </div>
                )}
            </div>
        </AppContext.Provider>
    );
}

export default Homepage;
