import { useContext } from "react";
import styled from "styled-components";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "antd/lib/badge/style/css";
import { CartItemContext } from "../../../context/CartItemContext";

export const Cart = () => {
  const CartItem = useContext(CartItemContext);
  const inCartProducts = CartItem?.inCartItems.length;

  return (
    <Container>
      <Badge count={inCartProducts} size="small">
        <ShoppingCartOutlined style={{ fontSize: 24 }} />
      </Badge>
    </Container>
  );
};
const Container = styled.div`
  cursor: pointer;
`;
