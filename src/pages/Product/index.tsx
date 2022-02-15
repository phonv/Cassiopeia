import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Collapse } from "antd";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import "antd/lib/collapse/style/css";
import { fetchData, PRODUCT_DETAIL_URL } from "../../api";
import { StyledLink } from "../../App";
import { CartItemContext } from "../../context/CartItemContext";
import { ApiProductProps } from "../../types";
import { CounterContainer } from "../../components/UI/mocules/Counter";
import { ProductSlideShow } from "../../components/UI/organisms/ProductSlideShow";

const descriptions = [
  { title: "Bouquet contents", content: "No content yet" },
  { title: "Includes", content: "No content yet" },
  {
    title: "Delivery & Pay policy",
    content:
      "Each bouquet is unique and is prepared by an expert florist and our customer service team is at your service to ensure the best experience possible.",
  },
];
const tags = [
  {
    icon: "https://cassiopeia.store/svgs/free-i.svg",
    content: "Benefits description",
  },
  {
    icon: "https://cassiopeia.store/svgs/star-i.svg",
    content: "Always fresh flowers",
  },
  {
    icon: "https://cassiopeia.store/svgs/camera-i.svg",
    content: "Take photo of bouquet",
  },
];

const { Panel } = Collapse;

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ApiProductProps>();
  const [quantity, setQuantity] = useState<number>(1);
  const cartItemContext = useContext(CartItemContext);
  const cartItems = cartItemContext?.inCartItems;
  const setCartItems = cartItemContext?.setInCartItems!;

  const handleAddItemToCart = () => {
    const filteredItems = cartItems?.filter((item) => item.id !== id)!;

    setCartItems(() => [...filteredItems, { ...product, amount: quantity }]);

    localStorage.setItem(
      "products",
      JSON.stringify([...filteredItems, { ...product, amount: quantity }])
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
        <StyledLink
          to={"/product/" + id}
          style={{ fontWeight: "bold", fontSize: "0.75rem" }}
        >
          {product?.name}
        </StyledLink>
      </div>
      <div className="product-view">
        <div className="image-viewer">
          <div className="image-wrapper">
            <img src={product?.image} alt="product" />
          </div>
          <div className="tags">
            {tags.map((tag, i) => (
              <span className="tag" key={i}>
                <img src={tag.icon} alt="tag" />
                <span>{tag.content}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="product-detail">
          <header>
            <div className="title">{product?.name}</div>
            <div className="price">${product?.price}</div>
            <div className="counter-title">Count:</div>
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
            <div className="descriptions">
              <div className="des">Type: {product?.category}</div>
              {product?.occasion && (
                <div className="des">Occation: {product.occasion}</div>
              )}
            </div>
          </header>
          <div className="buttons">
            <StyledLink to="/checkout">
              <div className="order-btn">Order Now</div>
            </StyledLink>
            <div className="save-btn" onClick={handleAddItemToCart}>
              <ShoppingCartOutlined />
            </div>
          </div>
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) =>
              isActive ? <MinusOutlined /> : <PlusOutlined />
            }
            style={{ userSelect: "none" }}
            expandIconPosition="right"
          >
            {descriptions.map((item, i) => (
              <Panel key={i} header={item.title}>
                <p>{item.content}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
      <ProductSlideShow
        title="You may like"
        api={PRODUCT_DETAIL_URL}
        isRelevant={false}
      />
    </Container>
  );
};
const Container = styled.div`
  .product-link-bar {
    margin: 3rem 0;
  }
  .product-view {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    .image-viewer {
      flex: 1 1 15rem;
      .image-wrapper {
      }
      .tags {
        margin-top: 20px;
        display: flex;
        gap: 1rem;
        .tag {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
          gap: 5px;
          img {
            width: 46px;
            height: 46px;
          }
        }
      }
    }
    .product-detail {
      flex: 1 1 20rem;
      padding: 0 3%;
      header {
        .title {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .price {
          font-size: 28px;
          font-weight: 600;
          line-height: 28px;
          padding-bottom: 13px;
          border-bottom: 1px solid #ddd;
        }
        .counter-title {
          font-size: 1.15rem;
          margin: 2rem 0 1rem;
        }
        .descriptions {
          margin: 2rem 0;
          font-size: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
      .buttons {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 3rem;
        .order-btn {
          padding: 10px;
          width: 309px;
          height: 56px;
          background: black;
          border-radius: 5px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          transition: background-color 0.2s ease;
          :hover {
            background: #333;
            transition: background-color 0.2s ease;
          }
        }
        .save-btn {
          height: 56px;
          aspect-ratio: 1;
          border: 1.5px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          :hover {
            color: #888;
          }
        }
      }
    }
  }
`;
