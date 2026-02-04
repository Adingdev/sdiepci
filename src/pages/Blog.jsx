import React, { useState } from 'react';
import { FaCalendar, FaUser, FaTag, FaArrowRight, FaClock } from 'react-icons/fa';
import { blogData, blogCategories } from '../data/blogData';
import './PageStyles.css';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = selectedCategory === 'all'
    ? blogData
    : blogData.filter(a => a.category === selectedCategory);

  // Article à la une
  const featuredArticle = blogData.find(a => a.featured) || blogData[0];
  const otherArticles = filteredArticles.filter(a => a.id !== featuredArticle.id);

  return (
    <div className="blog-page">
      {/* Hero */}
      <div className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Blog & Actualités</h1>
            <p>Conseils et guides pour vos travaux</p>
          </div>
        </div>
      </div>

      {/* Article à la une */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-article">
            <div className="featured-image">
              <img src={featuredArticle.image} alt={featuredArticle.title} />
              <span className="featured-label">À la une</span>
            </div>
            <div className="featured-content">
              <span className="article-category">
                {blogCategories.find(c => c.id === featuredArticle.category)?.name}
              </span>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <div className="article-meta">
                <span><FaCalendar /> {new Date(featuredArticle.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span><FaClock /> {featuredArticle.readTime}</span>
                <span><FaUser /> {featuredArticle.author}</span>
              </div>
              <button className="btn-read">
                Lire l'article <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-bar">
            <div className="filter-buttons">
              {blogCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <span className="articles-count">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Liste des articles */}
      <section className="articles-section">
        <div className="container">
          <div className="articles-grid">
            {otherArticles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <span className="category-badge">
                    {blogCategories.find(c => c.id === article.category)?.name}
                  </span>
                </div>
                <div className="article-body">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-footer">
                    <div className="article-info">
                      <span><FaCalendar /> {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
                      <span><FaClock /> {article.readTime}</span>
                    </div>
                    <button className="btn-read-more">
                      Lire <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <div className="newsletter-text">
              <h2>Newsletter</h2>
              <p>Recevez nos conseils et actualités par email</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Votre email" 
                required 
              />
              <button type="submit">S'abonner</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;