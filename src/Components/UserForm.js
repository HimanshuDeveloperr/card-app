import React, { useState } from "react";
import axios from "axios";
import "./UserForm.css"; // Import the CSS file
import { NavLink } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [bucket, setBucket] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const Card = { name, link, bucket };

    console.log(Card);
    const URL = `https://card-api-e5682-default-rtdb.firebaseio.com/users.json`;
    axios
      .post(URL, Card)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setLink("");
    setBucket("");
  };

  return (
    <div className="user-form-container">
      {" "}
      {/* Add a container div */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bucket">Bucket:</label>
          <select
            id="bucket"
            value={bucket}
            onChange={(e) => setBucket(e.target.value)}
          >
            <option value="">Select a bucket</option>
            <option value="Entertainment Videos">Entertainment Videos</option>
            <option value="Education Videos">Education Videos</option>
            <option value="Sports Videos">Sports Videos</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <NavLink to="/bucket" className="btn btn-primary">
          Your Cards
        </NavLink>
      </div>
    </div>
  );
};

export default UserForm;
