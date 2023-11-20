import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.scss";
import AppContext from "../context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "../components/Navigation";
import News from "./News";
import Chats from "./Chats";
import Calendar from "./Calendar";
import Study from "./Study";

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

    return (
        <AppContext.Provider
            value={{
                articleText,
                articleTextId,
                isLoading,
                setArticleTextId,
            }}
        >
            <div className="home-page">
                {isLoading ? (
                    <div className="container-home d-flex justify-around">
                        <p>waitwaitwaitwait</p>
                    </div>
                ) : (
                    <div className="container-home d-flex justify-around">
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
