// src/pages/Home.js
import React, { useState, useEffect } from "react";
import ListingCard from "../components/ListingCard";
import Pagination from "../components/Pagination";
import MapView from "../components/MapView";
// import Listing from "./Listing";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch listings from the API
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${currentPage}&limit=10`
        );
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, [currentPage]);

  useEffect(() => {
    // Fetch total pages from the API or calculate based on total listings
    // For now, assuming 10 listings per page
    const totalListings = 100; // Replace with the actual total number of listings
    setTotalPages(Math.ceil(totalListings / 10));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex gap-5 ">
      <div className="w-1/2 ">
      <h1 className="text-3xl text-amber-500 font-bold mb-4">TripAdvisor</h1>
        <h1 className="text-cyan-500"> Look Into The Maps</h1>
        <MapView
          listings={listings}
        />

      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 py-5 gap-4 w-1/2">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
