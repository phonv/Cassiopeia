import { useContext } from "react";
import styled from "styled-components";
import { UserInfoContext } from "../../../../context/UserInfoContext";
import { CheckoutSectionProps } from "../../../../types";
import { Navigator, OrderProgress } from "../../../templates/CheckoutCenter";
import { LeftArrow } from "../../atoms/LeftArrow";
import { RightArrow } from "../../atoms/RightArrow";
import { CourierNote } from "../../mocules/CourierNote";
import { PickupNote } from "../../mocules/PickupNote";
import { RadioContainer } from "../RadioContainer";

export const CheckoutShipment = ({
  setCheckoutProgress,
}: CheckoutSectionProps) => {
  const userContext = useContext(UserInfoContext);
  if (!userContext) return <></>;
  const { userInfo, setUserInfo } = userContext;

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({
      ...prev,
      deliveryMethod: e.target.value,
    }));
  };

  return (
    <>
      <OrderProgress>
        <div className="pro checked">
          <span className="order">1</span>
          Contacts
        </div>
        <div className="pro">
          <div className="line"></div>
          <span className="order ">2</span>
          Shipping
        </div>
        <div className="pro in-active">
          <div className="line"></div>
          <span className="order">3</span>
          Payment
        </div>
      </OrderProgress>

      <UserShipmentForm>
        <div className="deli-method">
          <RadioContainer
            title="Delivery method"
            firstHeading="Pick up"
            secondHeading="Courier"
            firstValue="pickup"
            secondValue="courier"
            firstLabel=" Today, pick up is available in 2 stores"
            secondLabel="About 2 days"
            userField={userInfo?.deliveryMethod!}
            updateInfoCallback={(e) => handleRadioChange(e)}
          />
        </div>
        <div className="deli-form">
          {userInfo?.deliveryMethod === "pickup" ? (
            <PickupNote />
          ) : (
            <CourierNote />
          )}
        </div>
      </UserShipmentForm>

      <Navigator btnColor="#000">
        <div
          className="backstep"
          onClick={() => setCheckoutProgress("contact")}
        >
          <LeftArrow fill="#000" />
          Back step
        </div>
        <div className="forward" onClick={() => setCheckoutProgress("payment")}>
          Payment
          <RightArrow fill="white" />
        </div>
      </Navigator>
    </>
  );
};

const UserShipmentForm = styled.div``;
