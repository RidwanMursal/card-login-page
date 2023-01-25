import { ErrorState, UserInput } from "../App";
import { labels, placeholders } from "../constants";
import Input from "./Input";

type InputFieldProps = {
  label: string;
  state: UserInput;
  error: ErrorState;
};

const InputField = ({ label, state, error }: InputFieldProps) => (
  <div>
    <label htmlFor="username">{label}</label>
    <Input
      name="username"
      inputType={label === labels.name ? "text" : "card number"}
      value={label === labels.name ? state.name : state.cardNumber}
      setter={label === labels.name ? state.setName : state.setCardNumber}
      errorState={
        label === labels.name ? error.nameError : error.cardNumberError
      }
      placeholder={
        label === labels.name ? placeholders.name : placeholders.cardNumber
      }
    />
  </div>
);

export default InputField;
