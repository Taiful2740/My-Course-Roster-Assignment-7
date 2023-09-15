/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { BsCurrencyDollar, BsBook } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSelectCard = (card) => {
    const isExist = selectedCard.find((item) => item.id == card.id);

    let count = card.Credit;

    if (isExist) {
      return toast("Already Selected");
    } else {
      selectedCard.forEach((item) => {
        count = count + item.Credit;
      });

      // total price count here
      let totalCost = card.price;
      selectedCard.forEach((total) => {
        totalCost += total.price;
      });

      const totalRemainingCredit = 20 - count;

      if (count > 20) {
        return toast("Credit limit over");
      } else {
        setTotalPrice(totalCost);
        setTotalCredit(count);
        setRemaining(totalRemainingCredit);
        setSelectedCard([...selectedCard, card]);
      }
    }
  };

  console.log(selectedCard);
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="text-4xl font-bold text-center my-6">
        <h1>Course Registration</h1>
      </div>
      <div className=" md:flex lg:flex ">
        <div className="grid grid-cols-1 w-3/4  mx-auto mb-10 md:grid md:grid-cols-2 gap-6 lg:grid lg:grid-cols-3">
          {cards.map((card, idx) => (
            <div key={idx} className="card bg-gray-100 shadow-xl">
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
                  <span>Credit : {card.Credit}hr </span>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => handleSelectCard(card)}
                    className="w-[280px] h-[40px] rounded-[8px] text-white bg-[#2F80ED] md:w-[200px] "
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Card
          selectedCard={selectedCard}
          remaining={remaining}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></Card>
      </div>
    </div>
  );
};

export default Header;
