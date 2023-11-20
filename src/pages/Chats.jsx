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
                            <h3>Zack Fox</h3>
                            <h4>Have you ever heard of...</h4>
                        </div>
                        <div className="chat-left-userDate">
                            <p>10:49 AM</p>
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
                        <div className="chat-left-userDate">
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
                            <h4>Did you hear about OE DS..</h4>
                        </div>
                        <div className="chat-left-userDate">
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
                <div className="chat-right"></div>
            </div>
        </section>
    );
}

export default Chats;
