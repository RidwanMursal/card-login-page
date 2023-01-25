import { ErrorState, UserInput } from "../App";
import { placeholders } from "../constants";
import Input from "./Input";

type DateFieldProps = {
  state: UserInput;
  error: ErrorState;
};

const DateField = ({ state, error }: DateFieldProps) => {
  return (
    <div className="grid grid-cols-[1fr,1fr] gap-x-6">
      <div className="grid grid-cols-[1fr,1fr] gap-x-3">
        <label className="col-span-full" htmlFor="month">
          EXP. DATE (MM/YY)
        </label>
        {/* <label htmlFor="year">year</label> */}
        <Input
          name={"month"}
          inputType="month"
          value={state.month}
          setter={state.setMonth}
          errorState={error.monthError}
          placeholder={placeholders.month}
        />
        <Input
          name={"year"}
          inputType="year"
          value={state.year}
          setter={state.setYear}
          errorState={error.yearError}
          placeholder={placeholders.year}
        />
      </div>

      <div>
        <label htmlFor="cvc">CVC</label>
        <Input
          name={"cvc"}
          inputType="cvc"
          value={state.cvc}
          setter={state.setCvc}
          errorState={error.cvcError}
          placeholder={placeholders.cvc}
        />
      </div>
    </div>
  );
};

export default DateField;
