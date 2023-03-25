import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Card";

const FetchCardData = () => {
  const [cardDetatils, setCardDetails] = useState([]);

  useEffect(() => {
    const fetching = async () => {
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
        });
      }
      console.log(details);
      setCardDetails(details);
    };
    fetching();
  }, [setCardDetails]);

  const removeHandler=(id)=>{
    const URL = `https://card-api-e5682-default-rtdb.firebaseio.com/users/${id}.json`
    axios.delete(URL)
    setCardDetails((prevDetails)=>{
        return prevDetails.filter((detail)=>detail.id !== id)
    })
  }


  const onSave = async (id, newName, newLink) => {
    const URL = `https://card-api-e5682-default-rtdb.firebaseio.com/users/${id}.json`;
    const response = await axios.put(URL, { name: newName, link: newLink });
    const updatedDetail = {
      id: id,
      name: response.data.name,
      link: response.data.link,
    };
    setCardDetails((prevDetails) => {
      const index = prevDetails.findIndex((detail) => detail.id === id);
      const newDetails = [...prevDetails];
      newDetails[index] = updatedDetail;
      return newDetails;
    });
  };

  
  return (
    <div>
      {cardDetatils.map((detail) => (
        <Cards key={detail.id} name={detail.name} link={detail.link} onClick={removeHandler} id={detail.id} onSave={onSave}></Cards>
      ))}
    </div>
  );
};

export default FetchCardData;
