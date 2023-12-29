// src/pages/Listing.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListingDetail from '../components/ListingDetails';

const Listing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Fetch listing details from the API
    const fetchListing = async () => {
      try {
        const response = await fetch(
          `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings/${id}`
        );
        const data = await response.json();
        setListing(data);
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    };

    fetchListing();
  }, [id]);

  return (
    <div>
      {listing ? (
        <ListingDetail listing={listing} />
      ) : (
        <p>Loading listing details...</p>
      )}
    </div>
  );
};

export default Listing;
