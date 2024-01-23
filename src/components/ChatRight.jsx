import { useContext, useEffect, useState } from "react";
import ChatContext from "../ChatContext";

import { MessageFrom } from "./MessageFrom";
import { MessageTo } from "./MessageTo";
import axios from "axios";

export const ChatRight = () => {
    const [messagesWithPeople, setMessagesWithPeople] = useState([]);
    const [textMessage, setTextMessage] = useState("");

    const { messages, idToRightChat, siteUserID } = useContext(ChatContext);

    useEffect(() => {
        setMessagesWithPeople(
            messages.filter(
                (message) =>
                    message.memberFrom === idToRightChat || message.memberTo === idToRightChat
                // message.memberFrom.includes(idToRightChat) ||
                // message.memberTo.includes(idToRightChat)
                // message.idMemberFrom.includes(idToRightChat) ||
                // message.idMemberTo.includes(idToRightChat)
            )
        );
    }, [idToRightChat]);

    console.log(messagesWithPeople);

    const sendMessage = () => {
        const sms = {
            // idMemberFrom: `${siteUserID}`,
            // idMemberTo:
            //     messagesWithPeople.find((message) => !message.idMemberFrom.includes(siteUserID))
            //         .idMemberFrom ||
            //     messagesWithPeople.find((message) => !message.idMemberTo.includes(siteUserID))
            //         .idMemberTo,
            // text: textMessage,
            memberFrom: `${siteUserID}`,
            memberTo:
                messagesWithPeople.find((message) => message.memberFrom !== siteUserID)
                    .memberFrom ||
                messagesWithPeople.find((message) => message.memberTo !== siteUserID).memberTo,
            text: textMessage,
        };

        setMessagesWithPeople([...messagesWithPeople, sms]);
        setTextMessage("");

        try {
            // axios.post("https://6572d16a192318b7db4110ca.mockapi.io/message", sms);
            axios.post("http://79.174.83.190:8080/message", sms);
        } catch (error) {
            alert("Ошибка при отправке сообщения");
            console.log(error);
        }
    };

    return (
        <div className="chat-right">
            <div className="chatRightContainer">
                {/* {messagesWithPeople.map((message) =>
                    +message.idMemberFrom === +idToRightChat ? (
                        <MessageFrom message={message} />
                    ) : (
                        <MessageTo message={message} />
                    )
                )} */}
                {messagesWithPeople.map((message) =>
                    +message.memberFrom === +idToRightChat ? (
                        <MessageFrom message={message} />
                    ) : (
                        <MessageTo message={message} />
                    )
                )}
            </div>

            <div className="chat-send-message-form d-flex flex-column">
                <div className="d-flex justify-center">
                    <input
                        type="text"
                        placeholder="Message"
                        onChange={(e) => setTextMessage(e.target.value)}
                        value={textMessage}
                    />
                </div>
                <div className="chat-outline"></div>
                <div className="chat-send-icons d-flex flex justify-between">
                    <div>
                        <img
                            src="../src/assets/chat-voice.svg"
                            alt="chat-voice"
                            width={32}
                            height={32}
                        />
                        <img
                            src="../src/assets/chat-paperclip.svg"
                            alt="avatar"
                            width={32}
                            height={32}
                        />
                    </div>
                    <button onClick={sendMessage} className="cu-p">
                        <p>Отправить</p>
                    </button>
                </div>
            </div>
        </div>
    );
};
