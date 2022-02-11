import styled from "styled-components";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { MapIcon } from "../../components/atoms/MapIcon";
import { Link } from "react-router-dom";

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
    name: "Discounts",
    path: "/",
  },
  {
    name: "About",
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
        <div className="logo">CASSIOPEIA</div>
        <div className="icons-center">
          <SearchOutlined />
          <ShoppingCartOutlined />
        </div>
      </div>
      <div className="navbar">
        {navItems.map((item, i) => (
          <Link key={i} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 8%;
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3em;
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
      font-weight: bolder;
    }
    .icons-center {
      gap: 20px;
    }
  }
  .navbar {
    display: flex;
    justify-content: center;
    gap: 4rem;
    font-weight: bold;
    margin-top: 3rem;
  }
`;
