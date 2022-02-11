import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { ApiProductProps } from "../../../types";
import { fetchData } from "../../../api";
import { ProductCard } from "../../mocules/ProductCard";

SwiperCore.use([Autoplay, Navigation]);

type ProductSlideShowProps = {
  title: string;
  api: string;
  isRelevant: boolean;
};

export const ProductSlideShow = ({
  title,
  api,
  isRelevant,
}: ProductSlideShowProps) => {
  const [products, setProducts] = useState<ApiProductProps[]>([]);

  useEffect(() => {
    fetchData(api).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Container>
      <header>
        {" "}
        <span className="title">{title}</span>
        <div className="navigators">
          <div className="slider-left-btn">
            <img
              src="https://cassiopeia.store/svgs/line-left-arrow-black.svg"
              alt="left button"
            />
          </div>
          <div className="slider-right-btn">
            <img
              src="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
              alt="right button"
            />
          </div>
        </div>{" "}
      </header>
      {products.length !== 0 && (
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          className="mySwiper"
        >
          {products &&
            products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          {!isRelevant && (
            <SwiperSlide style={{ height: "100%" }}>
              <StyledLink to="/">
                <div className="readmore-heading">Catalog</div>
                <span className="readmore-btn">
                  See more{" "}
                  <div className="arrow-right-icon">
                    <img
                      className="arrow"
                      src="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
                      alt="arrow"
                    />
                  </div>{" "}
                </span>
              </StyledLink>
            </SwiperSlide>
          )}
        </Swiper>
      )}
    </Container>
  );
};
const Container = styled.div`
  margin: 50px 0;
  header {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .navigators {
      display: flex;
      gap: 20px;
    }
  }
  .slider-left-btn,
  .slider-right-btn,
  .arrow-right-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 160px;
  .readmore-heading {
    font-weight: 600;
    font-size: 24px;
  }
  .readmore-btn {
    display: flex;
    align-items: center;
    gap: 17%;
    font-size: 16px;
    font-weight: bold;
    transition: gap 0.2s ease;
  }
  :hover {
    color: #777;
    .readmore-btn {
      gap: 20%;
      transition: gap 0.2s ease;
    }
  }
`;
