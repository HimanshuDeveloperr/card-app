
import React, { useState } from "react";
import axios from "axios";
import FetchCardData from "./Card/FetchCardData";

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
        <div>
          <label>Bucket:</label>
          <select value={bucket} onChange={(e) => setBucket(e.target.value)}>
            <option value="">Select a bucket</option>
            <option value="Entertainment Videos">Entertainment Videos</option>
            <option value="Education Videos">Education Videos</option>
            <option value="Sports Videos">Sports Videos</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <FetchCardData />
    </div>
  );
};

export default UserForm;
