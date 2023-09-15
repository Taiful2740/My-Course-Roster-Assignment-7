/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { BsCurrencyDollar, BsBook } from "react-icons/bs";

const Header = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSelectCard = (card) => {
    setSelectedCard([...selectedCard, card]);
  };

  console.log(selectedCard);
  return (
    <div>
      <div className="text-4xl font-bold text-center my-6">
        <h1>Course Registration</h1>
      </div>
      <div className="flex ">
        <div className="grid md:w-3/4 grid-cols-3 gap-6 mx-auto mb-10">
          {cards.map((card, idx) => (
            <div key={idx} className="card bg-gray-200 shadow-xl">
              <figure className="px-4 pt-4">
                <img src={card.cover} alt="img" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className="flex space-x-2 items-center text-center">
                  <span>
                    <BsCurrencyDollar></BsCurrencyDollar>
                  </span>

                  <span className="font-[16px]">Price : {card.price}</span>
                  <span className="w-[20px] h-[20px]">
                    <BsBook></BsBook>
                  </span>
                  <span>Credit : {card.Credit} </span>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => handleSelectCard(card)}
                    className="w-[280px] h-[40px] rounded-[8px] text-white bg-[#2F80ED]"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Header;
