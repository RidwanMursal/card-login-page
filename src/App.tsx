import { useEffect, useState } from "react";
import Button from "./components/Button";
import CardsContainer from "./components/CardsContainer";
import DateField from "./components/DateField";
import Form from "./components/Form";
import InputField from "./components/InputField";
import { labels } from "./constants";

const isDigit = (char: string) => {
  return char >= "0" && char <= "9";
};

const containsDigit = (string: string) => {
  let bool = false;
  for (let i = 0; i < string.length; i++) {
    if (isDigit(string[i])) {
      bool = true;
      break;
    }
  }
  return bool;
};
const isNumber = (string: string) => {
  let bool = true;
  for (let i = 0; i < string.length; i++) {
    if (!isDigit(string[i])) {
      bool = false;
      break;
    }
  }
  return bool;
};

const isEmpty = (string: string) => {
  return string.length === 0;
};

const x = (state: UserInput, error: ErrorState, setError: Function) => {
  let newError = { ...error };
  console.log("WOOOOO", !isNumber(state.cvc));
  console.log("WEEEEEEEEE", state.cvc.length < 3);
  console.log("THIS IS THE STATE", state);
  newError.nameError = isEmpty(state.name) || containsDigit(state.name);
  newError.cardNumberError =
    !isNumber(state.cardNumber) || state.month.length < 16;
  newError.monthError = !isNumber(state.month) || state.month.length < 2;
  newError.yearError = !isNumber(state.year) || state.year.length < 2;
  newError.cvcError = !isNumber(state.cvc) || state.cvc.length < 3;
  console.log(newError);

  setError(newError);

  return;
};

export type UserInput = {
  name: string;
  setName: Function;
  cardNumber: string;
  setCardNumber: Function;
  month: string;
  setMonth: Function;
  year: string;
  setYear: Function;
  cvc: string;
  setCvc: Function;
};

export type ErrorState = {
  nameError: boolean;
  cardNumberError: boolean;
  monthError: boolean;
  yearError: boolean;
  cvcError: boolean;
};

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [error, setError] = useState({
    nameError: false,
    cardNumberError: false,
    monthError: false,
    yearError: false,
    cvcError: false,
  });

  const state = {
    name,
    setName,
    cardNumber,
    setCardNumber,
    month,
    setMonth,
    year,
    setYear,
    cvc,
    setCvc,
  };

  return (
    <div className="flex flex-col gap-20 md:flex-row md:justify-between  ">
      <CardsContainer cardNumber={cardNumber} name={name} cvc={cvc} />
      <div className=" flex w-full px-4 md:h-screen md:justify-center md:items-center">
        <Form>
          <InputField label={labels.name} state={state} error={error} />
          <InputField label={labels.cardNumber} state={state} error={error} />
          <DateField state={state} error={error} />
          <Button onClick={() => x(state, error, setError)} text={"confirm"} />
        </Form>
      </div>
    </div>
  );
}

export default App;
