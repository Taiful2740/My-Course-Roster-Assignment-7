/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ selectedCard, remaining, totalCredit, totalPrice }) => {
  console.log(selectedCard);

  return (
    <div className="mx-auto">
      <h1 className="text-[18px] py-4 font-bold text-[#2F80ED]">
        Credit Hour Remaining {remaining} hr
      </h1>
      <hr />
      <h1 className="text-2xl font-bold py-4">Course Name</h1>
      <h1 className="font-semibold pb-2">
        Selected Course : {selectedCard.length}{" "}
      </h1>
      {selectedCard.map((card, idx) => (
        <li key={idx}>{card.title}</li>
      ))}
      <hr className="mt-4" />
      <h1 className="text-[16px] font-semibold py-4">
        Total Credit Hour : {totalCredit}
      </h1>
      <hr />
      <h2 className="text-[16px] font-semibold py-4">
        Total Price: {totalPrice} USD
      </h2>
      <hr />
    </div>
  );
};

export default Card;
