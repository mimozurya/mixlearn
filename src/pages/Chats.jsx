import { useDispatch, useSelector } from "react-redux";
import { ChatLeft } from "../components/ChatLeft";
import { ChatRight } from "../components/ChatRight";
import { useEffect, useState } from "react";
import axios from "axios";

import ChatContext from "../ChatContext";

function Chats() {
    const [siteUser, setSiteUser] = useState({});
    const [arrUsers, setArrUsers] = useState([]);
    const [messages, setMessages] = useState([]);

    const [fromMessageID, setFromMessageID] = useState([]);
    const [toMessageID, setToMessageID] = useState([]);
    const [usersToLeftChat, setUsersToLeftChat] = useState([]);

    const [idToRightChat, setIdToRightChat] = useState(-1);

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const siteUserID = useSelector((state) => state.id.id);

    useEffect(() => {
        async function fetchDataChats() {
            const siteUserResponce = await axios.get(
                `https://655e414a9f1e1093c59acfec.mockapi.io/user/${siteUserID}`
            );
            const usersResponce = await axios.get(
                "https://655e414a9f1e1093c59acfec.mockapi.io/user"
            );
            const messagesResponce = await axios.get(
                "https://6572d16a192318b7db4110ca.mockapi.io/message"
            );

            setSiteUser(siteUserResponce.data);
            setArrUsers(usersResponce.data.filter((user) => +user.id !== +siteUserID));
            setMessages(
                messagesResponce.data.filter(
                    (message) =>
                        +message.idMemberFrom === +siteUserID || +message.idMemberTo === +siteUserID
                )
            );
        }

        fetchDataChats();
    }, []);

    useEffect(() => {
        setFromMessageID(Object.keys(messages).map((key) => messages[key].idMemberFrom));
        setToMessageID(Object.keys(messages).map((key) => messages[key].idMemberTo));
        setUsersToLeftChat(
            arrUsers.filter((user) =>
                [...new Set([...fromMessageID, ...toMessageID])].includes(user.id)
            )
        );
        setLoading(false);
    }, [messages && arrUsers, loading]);

    return (
        <ChatContext.Provider
            value={{
                messages,
                usersToLeftChat,
                idToRightChat,
                setIdToRightChat,
            }}
        >
            <section className="information-chat d-flex align-center flex-column">
                {loading ? (
                    <h2>прив</h2>
                ) : (
                    <>
                        <header className="d-flex justify-between align-center">
                            <img
                                src="../src/assets/chat-logotype.svg"
                                alt="chat-logotype"
                                className="chat-logotype"
                            />
                            <h1>MixMessage</h1>
                            <div className="chat-header-userTo d-flex justify-center align-center">
                                <b>Человек</b>
                                <p>был(-а) в сети 5 минут назад</p>
                            </div>
                            <div className="chat-header-setting d-flex justify-center align-center">
                                <img src="../src/assets/chat-setting.svg" alt="chat-setting" />
                                <img src="../src/assets/chat-about.svg" alt="chat-about" />
                                <img
                                    src="../src/assets/avatar.svg"
                                    alt="avatar"
                                    width={32}
                                    height={32}
                                />
                            </div>
                        </header>
                        <div className="d-flex">
                            <ChatLeft />
                            <ChatRight />
                        </div>
                    </>
                )}
            </section>
        </ChatContext.Provider>
    );
}

export default Chats;
