import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/templates/Header";
import { Footer } from "./components/templates/Footer";
import { CartItemProvider } from "./context/CartItemContext";

function App() {
  return (
    <Container>
      <CartItemProvider>
        <Header />
        <div className="layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </CartItemProvider>
      <GlobalStyle />
    </Container>
  );
}

const Container = styled.div`
  .layout {
    min-height: 100vh;
    padding: 0 10%;
  }
`;
export const StyledLink = styled(Link)`
  &:hover {
    color: #555;
  }
`;

export default App;
