/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ selectedCard }) => {
  console.log(selectedCard);

  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold">Course Name</h1>
      <h1>Selected Course : {selectedCard.length} </h1>
      {selectedCard.map((card, idx) => (
        <li key={idx}>{card.title}</li>
      ))}
    </div>
  );
};

export default Card;
