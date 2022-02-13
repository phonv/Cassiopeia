import { Card } from "antd";
import "antd/lib/card/style/css";
import styled from "styled-components";

type SliderItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddItem: () => void;
};
const { Meta } = Card;

export const ProductCard = ({
  id,
  name,
  image,
  price,
  onAddItem,
}: SliderItemProps) => {
  return (
    <BorderlessCard
      hoverable
      cover={<img alt="product" src={image} />}
      onClick={onAddItem}
    >
      <Meta title={name} description={"$ " + price} />
    </BorderlessCard>
  );
};

const BorderlessCard = styled(Card)`
  border: none;
  text-align: center;
`;
