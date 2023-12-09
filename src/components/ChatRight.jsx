import { useContext, useEffect, useState } from "react";
import ChatContext from "../ChatContext";

import { MessageFrom } from "./MessageFrom";
import { MessageTo } from "./MessageTo";

export const ChatRight = () => {
    const [messagesWithPeople, setMessagesWithPeople] = useState([]);

    const { messages, idToRightChat } = useContext(ChatContext);

    useEffect(() => {
        setMessagesWithPeople(
            messages.filter(
                (message) =>
                    message.idMemberFrom.includes(idToRightChat) ||
                    message.idMemberTo.includes(idToRightChat)
            )
        );
    }, [idToRightChat]);

    console.log(messagesWithPeople);

    return (
        <div className="chat-right">
            {messagesWithPeople.map((message) =>
                +message.idMemberFrom === +idToRightChat ? (
                    <MessageFrom message={message} />
                ) : (
                    <MessageTo message={message} />
                )
            )}

            <div className="chat-send-message-form d-flex flex-column">
                <div className="d-flex justify-center">
                    <input type="text" placeholder="Message" />
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
                    <button>
                        <p>Отправить</p>
                    </button>
                </div>
            </div>
        </div>
    );
};
