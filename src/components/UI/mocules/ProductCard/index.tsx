import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";

type SliderItemProps = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export const ProductCard = ({ id, name, image, price }: SliderItemProps) => {
  return (
    <BorderlessCard>
      <div className="image-wrapper">
        <img src={image} alt="cover" />
        <div className="buttons">
          <span className="add-to-cart">
            <ShoppingCartOutlined />
          </span>
          <HoverlessLink to={"/product/" + id}>
            <span className="detail">
              <SearchOutlined />
            </span>
          </HoverlessLink>
        </div>
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="price">$ {price}</div>
      </div>
    </BorderlessCard>
  );
};

const BorderlessCard = styled.div`
  text-align: center;
  .image-wrapper {
    position: relative;
    overflow: hidden;
    .buttons {
      position: absolute;
      bottom: -100%;
      left: 50%;
      transition: bottom 0.3s linear;
      transform: translateX(-50%);
      font-size: 25px;
      display: flex;
      gap: 20px;
      cursor: pointer;

      .add-to-cart,
      .detail {
        display: inline-block;
        background: white;
        padding: 5px;
        width: 46px;
        height: 46px;
        border-radius: 7px;
        :hover {
          background: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
  .content {
    padding: 10px;
    font-weight: 600;
    .name {
      font-size: 18px;
    }
  }
  :hover {
    .buttons {
      bottom: 15px;
      transition: bottom 0.2s linear;
    }
  }
`;
const HoverlessLink = styled(Link)`
  &:hover {
    color: black;
  }
`;
