import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {

  const mappedListings = listings.map(listing => {
    return (
      <ListingCard 
        key={listing.id}
        listing={listing}
        // id={listing.id}
        // description={listing.description}
        // image={listing.image}
        // location={listing.location}

        deleteListing={deleteListing}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
