import { useContext } from "react";
import ChatContext from "../ChatContext";

export const ChatLeft = () => {
    const { usersToLeftChat, setIdToRightChat } = useContext(ChatContext);

    return (
        <div className="chat-left-users d-flex flex-column">
            <div className="chat-search d-flex justify-start align-center">
                <img src="../src/assets/search.svg" alt="search" width={20} height={20} />
                <input type="text" placeholder="Search" />
            </div>

            {usersToLeftChat.map((user) => (
                <div
                    className="chat-left-user d-flex align-center justify-between cu-p"
                    onClick={() => setIdToRightChat(user.id)}
                >
                    <img src="../src/assets/avatar.svg" alt="avatar" width={40} height={40} />
                    <div className="chat-left-userPlaceholder">
                        <h3>{user.name}</h3>
                        <h4>Сообщение</h4>
                    </div>
                    <div className="chat-left-userDate d-flex flex-column align-end">
                        <p>6:34 PM</p>
                        <img
                            src="../src/assets/chat-pin.svg"
                            alt="chat-pin"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
