import { useContext, useState } from "react";
import styled from "styled-components";
import { Badge } from "antd";
import { ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import "antd/lib/badge/style/css";
import { CartItemContext } from "../../../../context/CartItemContext";
import { CartModal } from "../../organisms/CartModal";

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const CartItem = useContext(CartItemContext);
  const inCartProducts = CartItem?.inCartItems.length;

  const handleOpenModal = () => setIsCartOpen(true);
  const handleCloseModal = () => setIsCartOpen(false);

  return (
    <Container>
      {isCartOpen ? (
        <CloseOutlined style={{ fontSize: 24 }} />
      ) : (
        <Badge count={inCartProducts} size="small">
          <ShoppingCartOutlined
            style={{ fontSize: 24 }}
            onClick={handleOpenModal}
          />
        </Badge>
      )}
      <CartModal
        isEmpty={inCartProducts === 0}
        isOpen={isCartOpen}
        onClose={handleCloseModal}
      />
    </Container>
  );
};
const Container = styled.div`
  cursor: pointer;
`;
