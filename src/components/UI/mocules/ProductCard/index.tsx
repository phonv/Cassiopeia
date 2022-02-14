import { useContext } from "react";
import { Badge } from "antd";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import "antd/lib/card/style/css";
import styled from "styled-components";
import { StyledLink } from "../../../../App";
import { CartItemContext } from "../../../../context/CartItemContext";

type SliderItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddItem: () => void;
};

export const ProductCard = ({
  id,
  name,
  image,
  price,
  onAddItem,
}: SliderItemProps) => {
  const cartItemContext = useContext(CartItemContext);
  const cartItems = cartItemContext?.inCartItems;
  const existedItem = cartItems?.find((item) => item.id === id);

  return (
    <Container>
      <div className="image-wrapper">
        <img src={image} alt="product" />
        <div className="action-center">
          <div className="btn" onClick={!existedItem ? onAddItem : () => {}}>
            <Badge
              count={
                existedItem !== undefined ? (
                  <span className="checked-icon">
                    <CheckOutlined />
                  </span>
                ) : (
                  ""
                )
              }
            >
              <ShoppingCartOutlined />
            </Badge>
          </div>
          <StyledLink to={"/product/" + id}>
            <div className="btn">
              <SearchOutlined />
            </div>
          </StyledLink>
        </div>
      </div>

      <div className="content">
        <div className="name">{name}</div>
        <div className="price">$ {price}</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  .image-wrapper {
    position: relative;
    overflow: hidden;
    .action-center {
      transition: bottom 0.3s linear;
      position: absolute;
      bottom: -50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 20px;
      .btn {
        width: 45px;
        height: 45px;
        background: white;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        .checked-icon {
          background: lime;
          width: 16px;
          height: 16px;
          font-size: 0.7rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        &:hover {
          background: rgba(255, 255, 255, 0.7);
        }
      }
    }
    :hover {
      .action-center {
        transition: bottom 0.3s linear;
        bottom: 20px;
      }
    }
  }
  .name {
    font-size: 18px;
    font-weight: 600;
    margin: 20px 0 10px;
  }
  .price {
    font-size: 16px;
    font-weight: 500;
  }
`;
