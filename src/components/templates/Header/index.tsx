import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { StyledLink } from "../../../App";
import { MapIcon } from "../../UI/atoms/MapIcon";
import { CartIcon } from "../../UI/mocules/CartIcon";

const navItems = [
  {
    name: "Flowers",
    path: "/",
  },
  {
    name: "Plants",
    path: "/",
  },
  {
    name: "Gifts",
    path: "/",
  },
  {
    name: "Disconts",
    path: "/",
  },
  {
    name: "About us",
    path: "/",
  },
];

export const Header = () => {
  return (
    <Container>
      <div className="main-header">
        <div className="position-info-center">
          <MapIcon />
          <div className="position">London</div>
        </div>
        <StyledLink to="/">
          <div className="logo">CASSIOPEIA</div>
        </StyledLink>
        <div className="icons-center">
          <SearchOutlined style={{ fontSize: 24 }} />
          <CartIcon />
        </div>
      </div>
      <div className="navbar">
        {navItems.map((item, i) => (
          <StyledLink key={i} to={item.path}>
            {item.name}
          </StyledLink>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0.8rem 10%;
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.35em;
    .position-info-center,
    .icons-center {
      display: flex;
      align-items: center;
    }
    .position-info-center {
      gap: 5px;
      font-size: 0.7em;
    }
    .logo {
      font-weight: 700;
    }
    .icons-center {
      gap: 20px;
    }
  }
  .navbar {
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-top: 3rem;
  }
`;
