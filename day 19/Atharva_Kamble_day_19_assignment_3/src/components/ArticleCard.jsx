const ArticleCard = ({ article }) => {
  const { title, urlToImage, author, description } = article;

  return (
    <div className="article-card">
      <img src={urlToImage} alt={title} />
      <div className="article-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="author">By {author}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
