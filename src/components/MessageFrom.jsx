export const MessageFrom = (props) => {
    return (
        <div className="chat-message-from d-flex align-end">
            <img src="../src/assets/avatar.svg" alt="avatar" width={40} height={40} />
            <div className="message-form-from d-flex flex-column align-start">
                <h3>Ceaser</h3>
                <p>{props.message.text}</p>
                <span>10:36 PM</span>
            </div>
        </div>
    );
};
