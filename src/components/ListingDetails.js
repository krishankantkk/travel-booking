// src/components/ListingDetail.js
import React from "react";
import { Link } from "react-router-dom";

const ListingDetail = ({ listing }) => {
  const available = listing.status;

  return (
    <div className="border p-4 mb-4">
      <h2 className="text-gray-50  text-3xl font-bold mb-4"> details for location and more</h2>
      <Link to="/" className="text-blue-500">
        Back to Listings
      </Link>
     
      <div class="grid grid-flow-col grid-rows-3 gap-4">
        <div class="... row-span-3"><img src={listing.imageURL} alt={listing.title} className="mb-2 rounded" /></div>
        <div class="... col-span-2">
        <h1 className=" content-center decoration-2 italic text-xl text-white font-bold mb-2">{listing.name}</h1>
        </div>
        <div class=" col-span-2 row-span-2">
            <p className="inline decoration-solid "> ListedBy    </p>
        <span className="text-gray-50 text-base">{listing.listedBy}</span>
      <p className="text-slate-300 mb-2">{listing.description}</p>
      <p className="text-green-500 font-bold mb-2">${listing.price}/night</p>
      {available ? (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          book
        </button>
      ) : (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          unavailabe
        </button>
      )} 
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
