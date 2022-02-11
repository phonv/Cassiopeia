import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";

type BannerProps = {
  title: string;
  text: string;
  image: string;
  type: string;
};

export const Banner = ({ title, text, image, type }: BannerProps) => {
  return (
    <Container type={type}>
      <div className="content">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
        {type === "main-banner" ? (
          <span className="banner-btn">
            <span>Shop now</span>
            <img
              className="arrow"
              src="https://cassiopeia.store/svgs/line-right-arrow.svg"
              alt="arrow"
            />
          </span>
        ) : (
          <span className="banner-btn">
            <span>View now</span>
            <img
              className="arrow"
              src="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
              alt="arrow"
            />
          </span>
        )}
      </div>
      <img src={image} alt="banner" />
    </Container>
  );
};
const Container = styled.div<{ type: string }>`
  position: relative;
  .content {
    height: 100%;
    width: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: ${({ type }) => type === "main-banner" && 0};
    right: ${({ type }) => type !== "main-banner" && 0};
    padding: 0 7%;
    .title {
      font-size: 1.75em;
      font-weight: 500;
      font-family: Roboto;
    }
    .text {
      font-size: 1.125em;
    }
    .banner-btn {
      display: flex;
      justify-content: center;
      gap: 10px;
      width: fit-content;
      padding: ${({ type }) => type === "main-banner" && "10px 20px"};
      border-radius: 8px;
      background: ${({ type }) => type === "main-banner" && "#000"};
      color: ${({ type }) => type === "main-banner" && "#fff"};
      margin-top: 10%;
      cursor: pointer;
      :hover {
        background: ${({ type }) => type === "main-banner" && "#666"};
        transition: background-color 0.2s ease;
      }
      .arrow {
        width: 24px;
      }
    }
  }
`;
