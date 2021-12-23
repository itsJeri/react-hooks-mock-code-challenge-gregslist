import React, { useState } from "react";

function ListingCard({ listing: {id, description, image, location}, deleteListing }) {
  const [ favorited, setFavorited ] = useState(false);

  function handleToggle() {
    setFavorited(!favorited);
  }

  function handleDelete() {
    deleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleToggle}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleToggle}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
