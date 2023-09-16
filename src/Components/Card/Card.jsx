/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ selectedCard, remaining, totalCredit, totalPrice }) => {
  console.log(selectedCard);

  return (
    <div className="card w-80 h-40 m-auto md:mt-0 ">
      <div className="card-body  shadow-2xl rounded-xl ">
        <h1 className="text-center text-[18px] py-4 font-bold text-[#2F80ED] md:text-start md:font-semibold lg:text-left lg:font-extrabold">
          Credit Hour Remaining {remaining} hr
        </h1>
        <hr className="border" />
        <h1 className="text-center text-2xl font-bold py-4 md:text-start lg:text-left">
          Course Name
        </h1>
        <h1 className="text-center font-semibold pb-2 md:text-start lg:text-left">
          Selected Course : {selectedCard.length}{" "}
        </h1>
        {selectedCard.map((card, idx) => (
          <li className="text-center md:text-start lg:text-left" key={idx}>
            {card.title}
          </li>
        ))}
        <hr className="border" />
        <h1 className="text-center text-[16px] font-semibold py-4 md:text-start lg:text-left">
          Total Credit Hour : {totalCredit}
        </h1>
        <hr className="border" />
        <h2 className="text-center text-[16px] font-semibold py-4 md:text-start lg:text-left">
          Total Price: {totalPrice} USD
        </h2>
        <hr className="border" />
      </div>
    </div>
  );
};

export default Card;
