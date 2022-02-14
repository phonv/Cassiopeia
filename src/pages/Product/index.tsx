import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchData, PRODUCT_DETAIL_URL } from "../../api";
import { StyledLink } from "../../App";
import { CartItemContext } from "../../context/CartItemContext";
import { ApiProductProps, UserOrderProps } from "../../types";
import { CounterContainer } from "../../components/UI/mocules/Counter";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ApiProductProps>();
  const [quantity, setQuantity] = useState<number>(1);
  const cartItemContext = useContext(CartItemContext);
  const cartItems = cartItemContext?.inCartItems;
  const setCartItems = cartItemContext?.setInCartItems!;

  const handleAddItemToCart = () => {
    const existedItem = cartItems?.find((item) => item.id === id);
    setCartItems((prev) =>
      existedItem ? [...prev] : [...prev, { ...product, amount: quantity }]
    );
    localStorage.setItem(
      "products",
      JSON.stringify(
        !existedItem && [...cartItems!, { ...product, amount: quantity }]
      )
    );
  };

  useEffect(() => {
    fetchData(PRODUCT_DETAIL_URL).then((data: ApiProductProps[]) =>
      setProduct(data.find((el) => el.id == id))
    );
  }, []);

  return (
    <Container>
      <div className="product-link-bar">
        <StyledLink to="/">Home / </StyledLink>
        <StyledLink to="*">{product?.category} / </StyledLink>
        <StyledLink to="*" style={{ fontWeight: "bold", fontSize: "0.75rem" }}>
          {product?.name}
        </StyledLink>
      </div>
      <div className="product-view">
        <div className="image-viewer"></div>
        <div className="product-detail">
          <header>
            <div className="title">{product?.name}</div>
            <div className="price">{product?.price}</div>
            <div className="counter-title">Count</div>
            <CounterContainer>
              <div
                className="btn"
                onClick={() => {
                  if (quantity <= 1) return;
                  setQuantity(quantity - 1);
                }}
              >
                -
              </div>
              <div className="amount">{quantity}</div>
              <div className="btn" onClick={() => setQuantity(quantity + 1)}>
                +
              </div>
            </CounterContainer>
          </header>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div``;
