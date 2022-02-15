import styled from "styled-components";
import { InstagramIcon } from "../../UI/atoms/InstagramIcon";
import { FacebookIcon } from "../../UI/atoms/FacebookIcon";
import { WhatsappIcon } from "../../UI/atoms/WhatsappIcon";

const footerQuickLinks = [
  {
    title: "Help",
    items: [
      { name: "Contact us", path: "/" },
      { name: "Delivery Information", path: "/" },
      { name: "Payment information", path: "/" },
      { name: "Customer service", path: "/" },
      { name: "FAQ", path: "/" },
    ],
  },
  {
    title: "About us",
    items: [
      { name: "Our stores", path: "/" },
      { name: "Flower care", path: "/" },
      { name: "Site map", path: "/" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Privacy policy", path: "/" },
      { name: "Terms & Conditions", path: "/" },
      { name: "Cookie policy", path: "/" },
    ],
  },
];

const footerSocialLinks = {
  title: "Follow us",
  phoneNumber: "+84 0000 0000",
  socialNetworks: [
    { icon: <InstagramIcon />, path: "https://www.google.com.vn" },
    { icon: <WhatsappIcon />, path: "https://www.google.com.vn" },
    { icon: <FacebookIcon />, path: "https://www.google.com.vn" },
  ],
};

export const Footer = () => {
  return (
    <Container>
      <div className="quick-links">
        <div className="follow">
          <div className="title">{footerSocialLinks.title}</div>
          <div className="phone-number">{footerSocialLinks.phoneNumber}</div>
          <div className="social-network">
            {footerSocialLinks.socialNetworks.map((item, i) => (
              <a key={i} className="icon" href={item.path}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-items">
          {footerQuickLinks.map((child, i) => (
            <div key={i} className="footer-item">
              <div className="title">{child.title}</div>
              {child.items.map((link, j) => (
                <a key={j} href={link.path}>
                  <div className="link-name">{link.name}</div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">© Copyright, 2020</div>
    </Container>
  );
};

const Container = styled.div`
  padding: 4rem 12% 0;
  background: #000;
  color: white;
  .quick-links {
    display: flex;
    .follow {
      width: 345px;
      .phone-number {
        font-weight: bold;
        font-size: 0.75rem;
        margin-bottom: 20px;
      }
      .social-network {
        .icon {
          margin-right: 10px;
        }
      }
    }
    .footer-items {
      display: flex;
      .footer-item {
        width: 270px;
        .link-name {
          font-size: 0.85rem;
          margin-bottom: 10px;
        }
      }
    }
  }
  .copyright {
    border-top: 1px solid #555;
    color: #555;
    font-size: 0.75rem;
    padding: 1.2rem 0 3rem;
    margin-top: 2rem;
  }
  .title {
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
  }

  a {
    color: #bbb;
    font-family: "Poppins", sans-serif;
  }
`;
