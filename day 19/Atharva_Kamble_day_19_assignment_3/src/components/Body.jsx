import ArticleCard from "./ArticleCard";
import { articleData } from "../data/articleData";

const Body = () => {
  return (
    <section className="articles">
      <h2>Articles</h2>

      <div className="articles-grid">
        {articleData.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Body;
