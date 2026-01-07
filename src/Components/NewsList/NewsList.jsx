import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./NewsList.css";

const NewsList = () => {
  const { news, loading, category, searchTerm } = useContext(StoreContext);

  if (loading)
    return (
      <div className="loader-wrap">
        <div className="loader">
          <div className="spinner"></div>
          <p className="loading-text">Loading news...</p>
        </div>
      </div>
    );

  // filter + search logic
  const filteredNews = news.filter(item => {
    const matchCategory = category === "All" || item.category === category;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filteredNews.length === 0) {
    return <p className="no-results">No news found for "{searchTerm}" in {category}.</p>;
  }

  return (
    <div className="news-list">
      {filteredNews.map((item) => (
        <Link to={`/news/${item.slug}`} key={item.id} className="news-card">
          <img src={item.image} alt={item.title} />
          <div className="news-info">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span className="meta">
              {item.category} | {new Date(item.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
