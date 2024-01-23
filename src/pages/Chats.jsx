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
                `http://79.174.83.190:8080/user/${siteUserID}`
            );
            const messagesResponce = await axios.get("http://79.174.83.190:8080/messages");
            const usersResponce = await axios.get("http://79.174.83.190:8080/users");

            setSiteUser(siteUserResponce.data);
            setArrUsers(usersResponce.data.filter((user) => +user.id !== +siteUserID));
            setMessages(
                messagesResponce.data.filter(
                    (message) =>
                        message.memberFrom === +siteUserID || message.memberTo === +siteUserID
                    // message.idMemberFrom === +siteUserID || message.idMemberTo === +siteUserID
                )
            );
        }

        fetchDataChats();
        console.log(messages, "сообщения");
    }, []);

    useEffect(() => {
        // setFromMessageID(Object.keys(messages).map((key) => messages[key].idMemberFrom));
        // setToMessageID(Object.keys(messages).map((key) => messages[key].idMemberTo));
        setFromMessageID(Object.keys(messages).map((key) => messages[key].memberFrom));
        setToMessageID(Object.keys(messages).map((key) => messages[key].memberTo));
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
                siteUserID,
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
