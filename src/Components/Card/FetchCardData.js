import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cards from "./Card";
import "./FetchCardData.css";

const FetchCardData = () => {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://card-api-e5682-default-rtdb.firebaseio.com/users.json`;
      const response = await axios.get(URL);
      const data = response.data;
      console.log(data);

      const details = [];

      for (const key in data) {
        details.push({
          id: key,
          name: data[key].name,
          link: data[key].link,
          bucket: data[key].bucket,
        });
      }
      console.log(details);
      setCardDetails(details);
    };
    fetchData();
  }, [setCardDetails]);

  const removeHandler = (id) => {
    const URL = `https://card-api-e5682-default-rtdb.firebaseio.com/users/${id}.json`;
    axios.delete(URL);
    setCardDetails((prevDetails) => {
      return prevDetails.filter((detail) => detail.id !== id);
    });
  };

  const saveHandler = (id, name, link, bucket) => {
    const URL = `https://card-api-e5682-default-rtdb.firebaseio.com/users/${id}.json`;
    axios.patch(URL, { name, link, bucket });
    setCardDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      const index = updatedDetails.findIndex((detail) => detail.id === id);
      if (index !== -1) {
        updatedDetails[index].name = name;
        updatedDetails[index].link = link;
        updatedDetails[index].bucket = bucket;
      }
      return updatedDetails;
    });
  };

  const renderCardsByBucket = (bucketName) => {
    return cardDetails
      .filter((detail) => detail.bucket === bucketName)
      .map((detail) => (
        <Cards
          key={detail.id}
          name={detail.name}
          link={detail.link}
          bucket={detail.bucket}
          onClick={removeHandler}
          onSave={saveHandler}
          id={detail.id}
        />
      ));
  };

  return (
    <>
      <div className="card-container">
        <h2 className="bucket-title ">Entertainment Bucket</h2>
        {renderCardsByBucket("Entertainment Videos")}
        <h2 className="bucket-title ">Sport Bucket</h2>
        {renderCardsByBucket("Sports Videos")}
        <h2 className="bucket-title ">Education Bucket</h2>
        {renderCardsByBucket("Education Videos")}
      </div>
      <NavLink to="/history" className="btn btn-primary">
        Your History
      </NavLink>
    </>
  );
};

export default FetchCardData;
