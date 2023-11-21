function Notification() {
    return (
        <div className="notification-block d-flex flex-column align-center">
            <b>Уведомления</b>
            <div className="notification-element d-flex align-center">
                <img src="../src/assets/learn.png" alt="avatar" width={40} height={40} />
                <p>Скоро праздник Пасхи в школе!</p>
            </div>
            <div className="notification-element d-flex align-center">
                <img src="../src/assets/girl.png" alt="avatar" width={40} height={40} />
                <p>Новое событие в вашем классе!</p>
            </div>
            <div className="notification-element d-flex align-center">
                <img src="../src/assets/learn.png" alt="avatar" width={40} height={40} />
                <p>Записывайся в клуб любителей математики!</p>
            </div>
        </div>
    );
}

export default Notification;
