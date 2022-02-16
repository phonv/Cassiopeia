import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CheckedRadio, UncheckedRadio } from "../../atoms/Radio";

type RadioGroupTypes = {
  title: string;
  firstHeading: string;
  secondHeading: string;
  firstValue: string;
  secondValue: string;
  firstLabel?: string;
  secondLabel?: string;
  userField: string;
  updateInfoCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioContainer = ({
  title,
  firstHeading,
  secondHeading,
  firstValue,
  secondValue,
  firstLabel,
  secondLabel,
  userField,
  updateInfoCallback,
}: RadioGroupTypes) => (
  <>
    <div className="checkout-form-title">{title}</div>
    <RadioGroup
      defaultValue={userField}
      onChange={(e) => updateInfoCallback(e)}
    >
      <Label
        className="label1"
        defaultValue={userField}
        value={firstValue}
        control={
          <Radio icon={<UncheckedRadio />} checkedIcon={<CheckedRadio />} />
        }
        label={
          <div className="label">
            <div className="heading">{firstHeading}</div>
            <div className="sub-heading">{firstLabel}</div>
          </div>
        }
      />
      <Label
        className="label2"
        defaultValue={userField}
        value={secondValue}
        control={
          <Radio icon={<UncheckedRadio />} checkedIcon={<CheckedRadio />} />
        }
        label={
          <div className="label">
            <div className="heading">{secondHeading}</div>
            <div className="sub-heading">{secondLabel}</div>
          </div>
        }
      />
    </RadioGroup>
  </>
);

const Label = styled(FormControlLabel)<{ defaultValue?: string }>`
  border: 1.5px solid #eee;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  &.label1 {
    border-color: ${({ defaultValue }) =>
      (defaultValue === "pickup" || defaultValue === "offline") && "#000"};
  }
  &.label2 {
    border-color: ${({ defaultValue }) =>
      (defaultValue === "courier" || defaultValue === "online") && "#000"};
  }
  .label {
    margin-left: 15px;
    .heading {
      font-weight: 400;
    }
    .sub-heading {
      font-size: 0.8rem;
    }
  }
`;
