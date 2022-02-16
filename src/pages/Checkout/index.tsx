import styled from "styled-components";
import { StyledLink } from "../../App";
import { CheckoutCenter } from "../../components/templates/CheckoutCenter";
import { CheckoutBanner } from "../../components/templates/CheckoutBanner";

export const Checkout = () => (
  <Container>
    <div className="path-bar">
      <StyledLink to="/">Home / </StyledLink>
      <StyledLink
        style={{ fontWeight: "bold", fontSize: "0.75rem" }}
        to="/checkout"
      >
        Checkout
      </StyledLink>
    </div>
    <div className="checkout-title">Checkout</div>
    <div className="checkout-layout">
      <CheckoutCenter />
      <CheckoutBanner />
    </div>
  </Container>
);

const Container = styled.div`
  padding-bottom: 5%;
  .checkout-title {
    font-size: 2.2rem;
    font-weight: 500;
    margin-top: 2.3rem;
  }
  .checkout-layout {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }
`;
