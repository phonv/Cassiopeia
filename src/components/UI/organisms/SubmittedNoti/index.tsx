import { useContext } from "react";
import styled from "styled-components";
import { RightArrow } from "../../atoms/RightArrow";
import { UserInfoContext } from "../../../../context/UserInfoContext";
import { OrderProgress } from "../../../templates/CheckoutCenter";
import { StyledLink } from "../../../../App";

export const SubmittedNoti = () => {
  const userContext = useContext(UserInfoContext);
  if (!userContext) return <></>;
  const { userInfo } = userContext;

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
        <div className="pro checked">
          <div className="line"></div>
          <span className="order">3</span>
          Payment
        </div>
      </OrderProgress>
      <CompleteStatusWrapper>
        <div className="checkout-complete-status">
          Checkout complete!
          <br />
          Thank you for your order...
        </div>
        <div className="information-center">
          <div className="checkout-submitted-info">
            <span className="checkout-submitted-heading">Full name</span>
            {userInfo.name}
          </div>
          <div className="checkout-submitted-info">
            <span className="checkout-submitted-heading">Phone number</span>
            {userInfo.phone}
          </div>
          <div className="checkout-submitted-info">
            <span className="checkout-submitted-heading">Gender</span>
            {userInfo.gender}
          </div>
        </div>
        <StyledLink to="/">
          <div className="checkout-home-btn">
            Come back homepage <RightArrow fill="#000" />
          </div>
        </StyledLink>
      </CompleteStatusWrapper>
    </>
  );
};
const CompleteStatusWrapper = styled.div`
  margin-top: 3rem;
  .checkout-complete-status {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
  .information-center,
  .checkout-home-btn {
    font-size: 1.1rem;
    font-weight: 400;
    margin: 1rem 0 3rem;
  }
  .checkout-submitted-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .checkout-home-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    user-select: none;
    cursor: pointer;
  }
`;
