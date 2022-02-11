import { Link } from "react-router-dom";
import { Card } from "antd";
import "antd/lib/card/style/css";
import styled from "styled-components";

type SliderItemProps = {
  id: string;
  name: string;
  price: string;
  image: string;
};
const { Meta } = Card;

export const ProductCard = ({ id, name, image, price }: SliderItemProps) => {
  return (
    <Link to={"/product/" + id}>
      <BorderlessCard hoverable cover={<img alt="product" src={image} />}>
        <Meta title={name} description={"$ " + price} />
      </BorderlessCard>
    </Link>
  );
};

const BorderlessCard = styled(Card)`
  border: none;
  text-align: center;
`;
