import { useContext } from "react";
import styled from "styled-components";
import { UserInfoContext } from "../../../../context/UserInfoContext";

const availableAddress = [
  {
    address:
      "120 Nguyen Thai Hoc Street, Pham Ngu Lao Ward, Hoang Mai district, Ha Noi",
  },
  { address: "233 Cong Hoa Street, 13 Ward, Tan Binh district, HCM city" },
];

export const PickupNote = () => {
  const userContext = useContext(UserInfoContext);
  if (!userContext) return <></>;
  const { userInfo, setUserInfo } = userContext;

  return (
    <Container>
      <div className="store-picker">
        <div className="checkout-form-title">Available stores</div>
        <div className="pickup-radio-wrapper">
          {availableAddress.map((item) => (
            <div className="pickup-radio-options">
              <input type="radio" name="pick-address" value={item.address} />
              <div className="pickup-radio-options-content">{item.address}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="receipt-date-picker">
        <div className="checkout-form-title">Date {"&"} time of receipt</div>
        <div className="pickup-input-wrapper">
          <input
            type="text"
            className="checkout-form-input"
            placeholder="dd/mm/yyyy"
          />{" "}
          <input
            type="text"
            className="checkout-form-input"
            placeholder="00:00"
          />
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .store-picker {
    margin: 2rem 0;
    .pickup-radio-wrapper {
      .pickup-radio-options {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        input {
          margin-top: 5px;
        }
      }
    }
  }
  .pickup-input-wrapper {
    display: flex;
    gap: 20px;
    input {
      width: 45%;
    }
  }
`;
