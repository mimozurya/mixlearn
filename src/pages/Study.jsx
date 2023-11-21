import Article from "../components/Article";
import AppContext from "../context";
import { useContext } from "react";

function Study() {
    const { isLoading, setArticleTextId } = useContext(AppContext);

    return (
        <section className="information">
            <p>обучалка</p>
        </section>
    );
}

export default Study;
