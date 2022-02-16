import { useContext } from "react";
import styled from "styled-components";
import { CheckoutSectionProps } from "../../../../types";
import { Navigator, OrderProgress } from "../../../templates/CheckoutCenter";
import { LeftArrow } from "../../atoms/LeftArrow";
import { RightArrow } from "../../atoms/RightArrow";
import { UserInfoContext } from "../../../../context/UserInfoContext";
import { RadioContainer } from "../RadioContainer";
import { OnlinePaymentNote } from "../../mocules/OnlinePaymentNote";

//If we need to send user information,
//attach a function to submit-button and send "userInfo" state

export const CheckoutPayment = ({
  setCheckoutProgress,
}: CheckoutSectionProps) => {
  const userContext = useContext(UserInfoContext);
  if (!userContext) return <></>;
  const { userInfo, setUserInfo } = userContext;

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({
      ...prev,
      paymentMethod: e.target.value,
    }));
  };

  return (
    <>
      <OrderProgress>
        <div className="pro checked">
          <span className="order">1</span>
          Contacts
        </div>
        <div className="pro checked">
          <div className="line"></div>
          <span className="order ">2</span>
          Shipping
        </div>
        <div className="pro">
          <div className="line"></div>
          <span className="order">3</span>
          Payment
        </div>
      </OrderProgress>

      <UserPaymentForm>
        <RadioContainer
          title="Payment method"
          firstHeading="Payment on Delivery"
          secondHeading="Online Payment"
          firstValue="offline"
          secondValue="online"
          userField={userInfo.paymentMethod!}
          updateInfoCallback={handleRadioChange}
        />
        {userInfo.paymentMethod === "online" && <OnlinePaymentNote />}
      </UserPaymentForm>

      <Navigator btnColor="#000">
        <div
          className="backstep"
          onClick={() => setCheckoutProgress("shipping")}
        >
          <LeftArrow fill="#000" />
          Back step
        </div>
        <div className="forward" onClick={() => setCheckoutProgress("submit")}>
          Submit
          <RightArrow fill="white" />
        </div>
      </Navigator>
    </>
  );
};
const UserPaymentForm = styled.div``;
