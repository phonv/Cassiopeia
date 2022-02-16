import styled from "styled-components";
import { useState } from "react";
import { CheckoutContact } from "../../UI/organisms/CheckoutContact";
import { CheckoutShipment } from "../../UI/organisms/CheckoutShipment";
import { CheckoutPayment } from "../../UI/organisms/CheckoutPayment";
import { SubmittedNoti } from "../../UI/organisms/SubmittedNoti";

export const CheckoutCenter = () => {
  const [checkoutProgress, setCheckoutProgress] = useState<string>("contact");

  return (
    <div className="checkout-center" style={{ width: 490 }}>
      {checkoutProgress === "contact" && (
        <CheckoutContact setCheckoutProgress={setCheckoutProgress} />
      )}
      {checkoutProgress === "shipping" && (
        <CheckoutShipment setCheckoutProgress={setCheckoutProgress} />
      )}
      {checkoutProgress === "payment" && (
        <CheckoutPayment setCheckoutProgress={setCheckoutProgress} />
      )}
      {checkoutProgress === "submit" && <SubmittedNoti />}
    </div>
  );
};
export const OrderProgress = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 4rem;
  .pro {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 400;
    .order {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border: 1px solid #000;
      border-radius: 50%;
      margin-right: 10px;
      font-size: 0.8rem;
      line-height: 0.8rem;
    }
    .line {
      background-color: black;
      width: 60px;
      height: 1.5px;
      margin: 0 15px;
    }
  }
  .pro.in-active {
    color: #aaa;
    .order {
      border-color: #aaa;
    }
    .line {
      background-color: #aaa;
    }
  }
  .pro.checked {
    .order {
      background-color: #000;
      color: white;
    }
  }
`;
export const Navigator = styled.div<{ btnColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 1rem;
  padding-right: 40px;
  margin-top: 2rem;
  user-select: none;
  .arrow {
    width: 30px;
    height: 30px;
  }
  .backstep {
    display: flex;
    align-items: center;
    gap: 14px;
    color: ${({ btnColor }) => btnColor};
    cursor: pointer;
  }
  .forward {
    width: 170px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    background: black;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
  }
`;
