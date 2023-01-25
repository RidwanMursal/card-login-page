import React from "react";
import frontFacingCard from "../assets/images/bg-card-front.png";
import BackFacingCard from "../assets/images/bg-card-back.png";
import logo from "../assets/images/card-logo.svg";

const addSpace = (string: string) => {
  let spacedString = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 4 !== 0) spacedString += string[i];
    else spacedString += " " + string[i];
  }
  return spacedString;
};

const CardsContainer = ({ cardNumber, month, year, cvc, name }: any) => {
  const remainingZeros = 16 - cardNumber.length;
  let displayNumber = "0".repeat(remainingZeros) + cardNumber;
  displayNumber = addSpace(displayNumber);

  return (
    <div
      id="space-background"
      className="h-[240px] relative bg-red-300 w-full md:h-screen   md:max-w-[400px] "
    >
      <div
        className="z-10 flex flex-col justify-between px-6 py-4 w-[300px] h-[165px] absolute  left-4 bottom-0 translate-y-1/4 md:w-[450px] md:h-[250px]   md:top-20 md:right-0 md:translate-x-1/4 "
        id="front-card"
      >
        <img className=" w-10 md:w-20" src={logo} alt="" />
        <div className="grid grid-cols-2 gap-y-3">
          <p className=" col-span-full text-xl md:text-4xl">{displayNumber}</p>
          <p>{name}</p>
          <p className="justify-self-end">00/00</p>
        </div>
      </div>
      <div
        className="flex flex-col justify-between px-6 py-4  w-[300px] h-[165px] left-16 top-[23px] absolute md:w-[450px] md:h-[250px]  md:top-1/2 md:right-0 md:translate-x-1/3 "
        id="back-card"
      >
        <p className="absolute right-9 top-[69px] text-white md:right-14 md:top-[110px]">
          {cvc}
        </p>
      </div>
    </div>
  );
};

export default CardsContainer;
