import { errorMessages } from "../constants";

type InputProps = {
  name: string;
  inputType: "card number" | "text" | "month" | "year" | "cvc";
  customStyles?: string;
  errorState: boolean;
  value: string;
  setter: Function;
  placeholder: string;
};

const isDigit = (char: string) => {
  return char >= "0" && char <= "9";
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

// const isValidMonthInput = (char: string, month: string) => {
//   return isDigit(char) && month.length <= 2 && month;
// };

// const isValidCvc = (char: string, cvc: string) => {
//   return isDigit(char) && cvc.length > 0 && cvc.length <= 3;
// };

// const isValidCardNumber = (cardNumber: string) => {
//   return isNumber(cardNumber);
// };

const Input = ({
  inputType,
  name,
  customStyles = "",
  errorState,
  value,
  setter,
  placeholder,
}: InputProps) => {
  let type;
  if (inputType === "month" || inputType === "year" || inputType === "cvc")
    type = "number";
  else type = "text";

  let maxLength;
  // useEffect(() => {
  //   alert("changed error state");
  // }, [errorState]);

  if (inputType === "month" || inputType === "year") maxLength = 2;
  else if (inputType === "cvc") maxLength = 3;
  else if (inputType === "card number") maxLength = 16;
  else maxLength = 100;

  return (
    <div>
      <input
        data-error={errorState ? "true" : "false"}
        data-empty-error={value.length === 0 ? "true" : "false"}
        data-value-error={value.length > 0 && errorState ? "true" : "false"}
        className={`w-full px-3 py-2 shadow rounded-md focus:outline-blue data-[error=true]:outline outline-2 outline-red-500  ${customStyles}`}
        name={name}
        type={"text"}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={(e) => setter(e.target.value)}
      />
      <p
        className={
          value.length === 0 && errorState
            ? "mt-1 text-red-500 text-xs"
            : " hidden"
        }
      >
        Can't Be Empty
      </p>
      <p
        className={
          value.length !== 0 && errorState
            ? "mt-1 text-red-500  text-xs"
            : " hidden"
        }
      >
        {errorMessages[inputType]}
      </p>
    </div>
  );
};

export default Input;
