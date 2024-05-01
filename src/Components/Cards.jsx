import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Card({ title, imageUrl, description, link }) {
  const location = useLocation();

  // Check if the current location's pathname is the homepage
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="card">
        <div className='card-info'>
        <img src={imageUrl} width="300px" height="200px" alt={title} />
        <div className="container">
          <h4 className='mt-2'><b>{title}</b></h4>
          <p className='mb-4'>{description}</p>
          {isHomePage && <Link className='border-b-2 border-[#EE1E46] text-white bg-[#4E1624]  px-2 py-1' to={link}>Explore More</Link>}
        </div>
        </div>
      </div>
    </>
  );
}

export default Card;
