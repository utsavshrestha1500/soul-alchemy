// Portfolio.js
import React from 'react';
import './portfolio.css';
import PortfolioItem from './PortfolioItem';
import portfolioItems from './portfolioItems'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            img={item.img}
            title={item.title}
            github={item.github}
            demo={item.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
