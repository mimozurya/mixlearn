import ContentLoader from "react-content-loader";
import AppContext from "../context";
import { useContext } from "react";

function Article() {
    const { articleText, articleTextId, isLoading } = useContext(AppContext);
    const article = articleText.find((item) => Number(item.id) === Number(articleTextId));

    return (
        <>
            {!article && isLoading ? (
                <>
                    <ContentLoader
                        speed={1}
                        width={1000}
                        height={260}
                        viewBox="0 0 1000 260"
                        backgroundColor="#fff4d6"
                        foregroundColor="#ffffff"
                        {...props}
                    >
                        <circle cx="151" cy="347" r="2" />
                        <rect x="7" y="194" rx="0" ry="0" width="144" height="78" />
                        <rect x="174" y="194" rx="0" ry="0" width="152" height="91" />
                        <rect x="348" y="0" rx="0" ry="0" width="231" height="255" />
                        <rect x="5" y="3" rx="0" ry="0" width="331" height="181" />
                    </ContentLoader>
                </>
            ) : (
                <>
                    <div className="article-photo d-flex flex-wrap">
                        <img
                            src={article.img1}
                            width={687}
                            height={504}
                            alt="photo1"
                            className="transform"
                        />
                        <img
                            src={article.img2}
                            width={290}
                            height={271}
                            alt="photo2"
                            className="transform"
                        />
                        <img
                            src={article.img3}
                            width={363}
                            height={271}
                            alt="photo3"
                            className="transform"
                        />
                    </div>
                    <div className="article-text">
                        <h2>Привет, друзья!</h2>
                        <p id="paragraph-1">{article.p1}</p>
                        <p id="paragraph-2">{article.p2}</p>
                        <p id="paragraph-3">{article.p3}</p>
                        <h2>Ждем вас!</h2>
                    </div>
                </>
            )}
        </>
    );
}

export default Article;
