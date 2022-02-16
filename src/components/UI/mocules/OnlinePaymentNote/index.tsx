import styled from "styled-components";

const creditCards = [
  {
    image:
      "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-visa_xbmobu.png",
    value: "",
  },
  {
    image:
      "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-master_hk7o4r.png",
    value: "",
  },
  {
    image:
      "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-american_wfurcp.png",
    value: "",
  },
  {
    image:
      "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-jcb_qb5auz.png",
    value: "",
  },
  {
    image:
      "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-discover_jhud7f.png",
    value: "",
  },
];

const onlineGateWays = [
  {
    image:
      "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-gateway-paypal_hp0gag.png",
    value: "",
  },
  {
    image:
      "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/payment-card-stripe_odvihl.png",
    value: "",
  },
];

export const OnlinePaymentNote = () => {
  return (
    <Container>
      <div className="credit-card-center">
        <div className="checkout-form-title">Credit cards</div>
        <div className="online-payment-grid">
          {creditCards.map((card, i) => (
            <div key={i} className="online-payment-card">
              <img src={card.image} />
            </div>
          ))}
        </div>
      </div>
      <div className="gateway-center">
        <div className="checkout-form-title">Online payment gateways</div>
        <div className="online-payment-grid">
          {onlineGateWays.map((card, i) => (
            <div key={i} className="online-payment-card">
              <img src={card.image} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  margin: 2rem 0;
  .online-payment-grid {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(136px, 150px));
    grid-gap: 20px;
    .online-payment-card {
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }
`;
