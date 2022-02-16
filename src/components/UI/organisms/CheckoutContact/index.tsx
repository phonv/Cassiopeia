import { useContext } from "react";
import styled from "styled-components";
import { LeftArrow } from "../../atoms/LeftArrow";
import { RightArrow } from "../../atoms/RightArrow";
import { OrderProgress } from "../../../templates/CheckoutCenter";
import { Navigator } from "../../../templates/CheckoutCenter";
import { CheckoutSectionProps } from "../../../../types";
import { UserInfoContext } from "../../../../context/UserInfoContext";

export const CheckoutContact = ({
  setCheckoutProgress,
}: CheckoutSectionProps) => {
  const userContext = useContext(UserInfoContext);
  const setUserInfo = userContext?.setUserInfo!;

  return (
    <>
      <OrderProgress>
        <div className="pro">
          <span className="order">1</span>
          Contacts
        </div>
        <div className="pro in-active">
          <div className="line"></div>
          <span className="order">2</span>
          Shipping
        </div>
        <div className="pro in-active">
          <div className="line"></div>
          <span className="order">3</span>
          Payment
        </div>
      </OrderProgress>
      <UserContactForm>
        <div className="checkout-form-title">Fill your information</div>
        <div className="input-center">
          <input
            type="text"
            className="name"
            placeholder="Full name"
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="number"
            className="phone-number"
            placeholder="Phone number"
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
        <div className="gender-selector">
          <div className="heading" style={{ fontWeight: 400 }}>
            Gender:
          </div>
          <div className="input-wrapper">
            <label htmlFor="male">Male</label>
            <input
              id="male"
              value="male"
              type="radio"
              name="gender"
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, gender: e.target.value }))
              }
            />
            <label htmlFor="female">Female</label>
            <input
              id="female"
              value="female"
              type="radio"
              name="gender"
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, gender: e.target.value }))
              }
            />
          </div>
        </div>
      </UserContactForm>
      <Navigator btnColor="#aaa">
        {" "}
        <div className="backstep">
          <LeftArrow fill="#aaa" />
          Back step
        </div>
        <div
          className="forward"
          onClick={() => setCheckoutProgress("shipping")}
        >
          Shippping
          <RightArrow fill="white" />
        </div>
      </Navigator>
    </>
  );
};
const UserContactForm = styled.div`
  .input-center {
    margin-bottom: 20px;
    input {
      padding: 10px;
      font-size: 0.8rem;
      font-weight: 400;
      border: 1px solid #eee;
      border-radius: 3px;
      width: 100%;
      max-width: 210px;
    }
    .name {
      margin-right: 20px;
    }
  }
  .gender-selector {
    display: flex;
    font-size: 14px;
    .input-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      label {
        line-height: 14px;
        font-weight: 500;
      }
      input {
        margin: 4px 10px 0 5px;
      }
    }
  }
`;
