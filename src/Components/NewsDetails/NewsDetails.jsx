import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaFacebookF, FaLinkedinIn, FaArrowLeft } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import "./NewsDetails.css";

const NewsDetails = () => {
  const { slug } = useParams();
  const { news, loading } = useContext(StoreContext);
  const navigate = useNavigate();

if (loading)
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading news...</p>
    </div>
  );


  const article = news.find((item) => item.slug === slug);

  if (!article)
    return (
      <div className="error-msg">
        <h2>News not found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );

  return (
    <div className="news-details-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back to News
      </button>

      <article className="news-details">
        <header className="news-header">
          <span className="category-badge">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="meta-info">
            <span className="date">
              Published:{" "}
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </header>

        <div className="image-container">
          <img src={article.image} alt={article.title} className="cover-img" />
        </div>

        {/* Share Section */}
        <div className="share-bar">
          <div className="share-label">
            <IoShareSocialOutline /> <span>SHARE</span>
          </div>
          <div className="share-icons">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="share-icon fb"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="share-icon x">
              <FaXTwitter />
            </a>
            <a href="#" className="share-icon ln">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="content-body">
          <p className="content-text">{article.content}</p>
        </div>
      </article>
    </div>
  );
};

export default NewsDetails;
