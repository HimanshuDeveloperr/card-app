import React, { useState } from "react";
import axios from "axios";
import FetchCardData from "./Card/FetchCardData";
const UserForm = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const Card = { name, link };

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

      setName('')
      setLink('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
     <FetchCardData></FetchCardData>
    </div>
  );
};

export default UserForm;
