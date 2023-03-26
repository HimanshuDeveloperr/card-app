import React, { useState } from 'react';

const HistoryContext = React.createContext({
  Cards: [],
  addCards: (details) => {}
});

export const HistoryContextProvider = (props) => {
  const [Cards, setCards] = useState([]);

  const addCardsHandler = (details) => {
    const newCard = {
      id: Math.random().toString(),
      name: details.name,
      link: details.link,
      timePlayed: new Date().toLocaleString()
    };
    setCards((prevState) => [...prevState, newCard]);
  };

  const contextValue = {
    Cards: Cards,
    addCards: addCardsHandler
  };

  return (
    <HistoryContext.Provider value={contextValue}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
