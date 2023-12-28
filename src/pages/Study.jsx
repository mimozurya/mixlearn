import Article from "../components/Article";
import AppContext from "../MainContext";
import { useContext } from "react";

function Study() {
    const { isLoading, setArticleTextId } = useContext(AppContext);

    return (
        <section className="information-study">
            <header>
                <h2>Онлайн-курсы по подготовке к экзаменам</h2>
            </header>
            <div className="d-flex align-center">
                <div className="studyHeadLeftSide">
                    <p>
                        <label for="studyEl">Предмет</label><br></br>
                        <select name="studyEl" id="studyEl">
                            <option value="Математика">Математика</option>
                            <option value="Русский язык">Русский язык</option>
                            <option value="Информатика">Информатика</option>
                            <option value="Биология">Биология</option>
                        </select>
                    </p>
                </div>
                <div className="studyHeadRightSide">
                    <p>Вид экзамена</p>
                    <div className="d-flex justify-center">
                        <p>ОГЭ</p>
                        <p>ЕГЭ</p>
                    </div>
                </div>
            </div>
            <div className="studyCourses d-flex justify-between">
                <div className="course d-flex flex-column align-center justify-start">
                    <img src="../src/assets/studySchoolboy.png" alt="" width={334} height={200} />
                    <h3>ЕГЭ-2024 для 11-х классов</h3>
                    <p>Курс для тех, кому уже в этом учебном году предстоит сдавать экзамен</p>
                    <button>Подробнее</button>
                </div>
                <div className="course d-flex flex-column align-center">
                    <img src="../src/assets/studySchoolboy.png" alt="" width={334} height={200} />
                    <h3>ЕГЭ-2024 для 10-х классов</h3>
                    <p>Курс для тех, кто хочет подготовиться к экзамену заранее.</p>
                    <button>Подробнее</button>
                </div>
                <div className="course d-flex flex-column align-center">
                    <img src="../src/assets/studySchoolboy.png" alt="" width={334} height={200} />
                    <h3 style={{marginLeft: 20}}>ЕГЭ-2024 перед 11-м классом (летний) </h3>
                    <p>Быстрый курс (2 мес.) для тех, кто хочет быстрее и легче осваивать новые темы</p>
                    <button>Подробнее</button>
                </div>
            </div>
        </section>
    );
}

export default Study;
