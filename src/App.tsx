import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Checkout } from "./pages/Checkout";
import { NotFound } from "./pages/NotFound";
import { Header } from "./templates/Header";
import { Footer } from "./templates/Footer";

function App() {
  return (
    <Container>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <GlobalStyle />
    </Container>
  );
}

const Container = styled.div`
  .body {
    min-height: 100vh;
  }
`;

export default App;
