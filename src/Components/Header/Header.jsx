/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Header = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  // console.log(cards);
  return (
    <div>
      <div className="text-4xl font-bold text-center my-6">
        <h1>Course Registration</h1>
      </div>
      <div className="flex ">
        <div className="grid md:w-2/3 grid-cols-3 gap-4">
          {cards.map((card) => (
            <div className="card bg-gray-200 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
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
