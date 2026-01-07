import React from 'react'
import './Home.css'

import NewsList from '../../Components/NewsList/NewsList'

const Home = () => {
  return (
      <div className="home-page">
    

      <section className="latest-news-section">
        <div className="section-header">
          <h2>📰 Latest News</h2>
          <p className="section-subtitle">
            Stay updated with the most recent headlines across categories
          </p>
        </div>

        <NewsList />
      </section>
    </div>


  )
}

export default Home
