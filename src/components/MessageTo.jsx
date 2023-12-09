export const MessageTo = (props) => {
    return (
        <div className="chat-message-to d-flex align-center justify-end">
            <div className="message-form-from d-flex flex-column align-end">
                <p>{props.message.text}</p>
                <span>10:36 PM</span>
            </div>
        </div>
    );
};
