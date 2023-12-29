// src/components/ListingCard.js
import React from 'react';
import { Link } from 'react-router-dom';
// import MapView from './MapView';

const ListingCard = ({ listing }) => {
  return (
    <div className="border-2 flex-col border-slate-400 rounded p-4 mb-4">
      <img src={listing.imageURL} alt={listing.title} className="mb-2 shadow-sm" />
      <div className=''>
      <h2 className="text-xl font-bold mb-2 colo text-zinc-50">{listing.name}</h2>
      <p className="text-zinc-300 mb-2">{listing.description}</p>
      <p className="text-green-500 font-bold mb-2">${listing.price}/night</p>
      <Link to={`/listing/${listing.id}`} className="text-blue-500">
        View Details
        
      </Link>
      
      </div>
    </div>
  );
};

export default ListingCard;
