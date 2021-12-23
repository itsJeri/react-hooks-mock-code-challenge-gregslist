import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const URL = 'http://localhost:6001/listings'

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listings => {
      setListings(listings);
    })
  }, [update])

  function deleteListing(listing) {
    if (window.confirm('Are you sure you want to delete this listing?') === true) {
      fetch(`http://localhost:6001/listings/${listing}`, {
        method: 'DELETE',
      })
      .then(setUpdate(!update))
    }
  }

  const itemsToDisplay = listings.filter(listing => {
    const lowerCaseListing = listing.description.toLowerCase();
    const lowerCaseInput = search.toLowerCase();

    if (search.length === 0) {
      return listing
    } 
    if (search.length > 0) {
    return lowerCaseListing.includes(lowerCaseInput)
    }
  })

  function sortListings() {
    const sortedListings= [...listings].sort((a, b) => {
      const textA = a.location.toLowerCase();
      const textB = b.location.toLowerCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    setListings(sortedListings)
  }

  function toggleForm() {
    setShowForm(!showForm)
  }


  function NewListingForm() {
    const [formData, setFormData] = useState({
      description: '',
      image: '',
      location: ''
    });

    function handleForm(e) {
      const newForm = {
        ...formData,
        [e.target.name]: e.target.value
      }
      setFormData(newForm)
    }
    function createListing(e) {
      e.preventDefault();
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(setUpdate(!update))
    }

    return(
      showForm ? (
        <form onSubmit={createListing}>
          <h2>New Listing</h2>
          <input type='text' name='description' placeholder='description' value={formData.description} onChange={handleForm}></input>
          <input type='text' name='image' placeholder='image' value={formData.image} onChange={handleForm}></input>
          <input type='text' name='location' placeholder='location' value={formData.location} onChange={handleForm}></input>
          <button>Submit</button>
        </form>
      ) : (
        <button onClick={toggleForm}>Create New Listing</button>
      )
    )
  }

  return (
    <div className="app">
      <Header
        setSearch={setSearch}
        sortListings={sortListings}
      />
      <NewListingForm />
      <ListingsContainer 
        listings={itemsToDisplay}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
