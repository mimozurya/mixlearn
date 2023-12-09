import "./RegStage.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function RegSuccess() {
    const [tempUserID, setTempUserID] = useState();

    const dispatch = useDispatch();
    const newUser = useSelector((state) => state.user);
    const userId = useSelector((state) => state.id.id);

    const addId = (id) => {
        dispatch({ type: "ADD_ID", payload: +id });
    };

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.post(
                "https://655e414a9f1e1093c59acfec.mockapi.io/user",
                newUser
            );

            setTempUserID(data.id);
        }

        fetchData();
    }, [userId]);

    return (
        <>
            <div className="successContainer d-flex flex-column align-center">
                <h2>Профиль создан успешно!</h2>
                <Link to="/homepage">
                    <button className="firstSuccess cu-p" onClick={() => addId(tempUserID)}>
                        Перейти на главную страницу
                    </button>
                </Link>
                <div className="d-flex">
                    <img src="../src/assets/subRegistration/line.svg" alt="iconSuccess" />
                    <p>или</p>
                    <img src="../src/assets/subRegistration/line.svg" alt="iconSuccess" />
                </div>
                <Link to="/profile">
                    <button className="secondSuccess cu-p" onClick={() => addId(tempUserID)}>
                        Редактировать профиль
                    </button>
                </Link>
            </div>
            <div className="codePicture3" style={{ opacity: 0.9, marginBottom: 128 }}>
                <img src="../src/assets/subRegistration/blueGearWheel.svg" alt="picture" />
            </div>
            <div className="codePicture1" style={{ opacity: 0.9 }}>
                <img
                    src="../src/assets/subRegistration/orangeFourStar.svg"
                    alt="picture"
                    width={200}
                    style={{ marginTop: 20 }}
                />
            </div>
            <div className="codePicture1" style={{ opacity: 0.9, marginTop: 30, marginLeft: 20 }}>
                <img src="../src/assets/subRegistration/orangeFourStar.svg" alt="picture" />
            </div>
        </>
    );
}

export default RegSuccess;
