export interface CartItemProps {
  id: string;
  name: string;
  price: string;
  color: string;
  image: string;
  detail: string;
  amount: string;
}
export interface ApiProductProps {
  id: string;
  name: string;
  price: string;
  colors: string[];
  image: string;
  detail: string;
}
export type PolicyProps = {
  id: string;
  title: string;
  body: string;
};
