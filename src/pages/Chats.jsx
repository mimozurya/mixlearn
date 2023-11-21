function Chats() {
    return (
        <section className="information-chat d-flex align-center flex-column">
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
                    <img src="../src/assets/avatar.svg" alt="avatar" width={32} height={32} />
                </div>
            </header>
            <div className="d-flex">
                <div className="chat-left-users d-flex flex-column">
                    <div className="chat-search d-flex justify-start align-center">
                        <img src="../src/assets/search.svg" alt="search" width={20} height={20} />
                        <input type="text" placeholder="Search" />
                    </div>

                    <div className="chat-left-user d-flex align-center justify-between">
                        <img src="../src/assets/avatar.svg" alt="avatar" width={40} height={40} />
                        <div className="chat-left-userPlaceholder">
                            <h3>Kathryn Cooper</h3>
                            <h4>Have you ever heard of..</h4>
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
                    <div className="chat-left-user d-flex align-center justify-between">
                        <img src="../src/assets/avatar.svg" alt="avatar" width={40} height={40} />
                        <div className="chat-left-userPlaceholder">
                            <h3>Kathryn Cooper</h3>
                            <h4>Thank you!</h4>
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
                    <div className="chat-left-user d-flex align-center justify-between">
                        <img src="../src/assets/avatar.svg" alt="avatar" width={40} height={40} />
                        <div className="chat-left-userPlaceholder">
                            <h3>Arthur Cooper</h3>
                            <h4>Did you hear..</h4>
                        </div>
                        <div className="chat-left-userDate d-flex flex-column align-end">
                            <p>1:21 AM</p>
                            <img
                                src="../src/assets/chat-pin.svg"
                                alt="chat-pin"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                </div>
                <div className="chat-right">
                    <div className="chat-message-from d-flex align-end">
                        <img src="../src/assets/avatar.svg" alt="avatar" width={40} height={40} />
                        <div className="message-form-from d-flex flex-column align-start">
                            <h3>Ceaser</h3>
                            <p>Come on, what's her name?</p>
                            <span>10:36 PM</span>
                        </div>
                    </div>
                    <div className="chat-message-to d-flex align-center justify-end">
                        <div className="message-form-from d-flex flex-column align-end">
                            <p>
                                Well, there is this one girl. I’ve had a crush on her ever since I
                                can remember. But I’m pretty sure she didn’t know I was alive until
                                the reaping
                            </p>
                            <span>10:36 PM</span>
                        </div>
                    </div>
                    <div className="chat-message-from d-flex align-end">
                        <img src="../src/assets/avatar.svg" alt="avatar" width={40} height={40} />
                        <div className="message-form-from d-flex flex-column align-start">
                            <h3>Ceaser</h3>
                            <p>She has another fellow?</p>
                            <span>1:05 PM</span>
                        </div>
                    </div>
                    <div className="chat-message-to d-flex align-center justify-end">
                        <div className="message-form-from d-flex flex-column align-end">
                            <p>I don’t know, but a lot of boys like her</p>
                            <span>8:33 PM</span>
                        </div>
                    </div>
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
            </div>
        </section>
    );
}

export default Chats;
