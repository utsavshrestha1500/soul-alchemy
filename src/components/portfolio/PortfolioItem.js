// PortfolioItem.js
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PortfolioItem = ({ img, title, github, demo }) => {
  return (
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <LazyLoadImage
          src={img}
          alt={title}
          effect="blur"
        />
      </div>
      <h3>{title}</h3>
      <div className='portfolio_item-cta'>
        <a href={github} className='btn'>GitHub</a>
        <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
      </div>
    </article>
  );
};

export default PortfolioItem;