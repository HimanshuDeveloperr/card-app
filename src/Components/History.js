import React, { useContext } from "react";
import HistoryContext from "./Store/HistoryContext";

const History = () => {
  const History = useContext(HistoryContext);

  console.log(History.Cards);

  return (
    <div>
      {" "}
      <h1>History</h1>
      {History.Cards.map((card, index) => (
        <div key={index}>
          <p>Name: {card.name}</p>
          <p>Link: {card.link}</p>
          <p>Time: {card.timePlayed}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
