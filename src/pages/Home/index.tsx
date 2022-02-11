import styled from "styled-components";
import { Banner } from "../../components/mocules/Banner";
import mainBanner from "../../asserts/images/banner1.jpg";
import subBanner1 from "../../asserts/images/banner2.jpeg";
import subBanner2 from "../../asserts/images/banner3.jpeg";
import { ProductSlideShow } from "../../components/organisms/ProductSlideShow";
import { PRODUCT_DETAIL_URL, POLICIES_URL } from "../../api";

export const Home = () => {
  return (
    <Container>
      <div className="banner-grid">
        <div className="main-banner">
          <Banner
            title="40% OFF"
            text="Best deals this week. Fresh flowers, plants and gifts"
            image={mainBanner}
            type="main-banner"
          />
        </div>
        <div className="sub-banner-wrapper">
          <div className="sub-banner">
            <Banner
              title="Nice little gifts"
              text="for loved ones"
              image={subBanner1}
              type="sub-banner"
            />
          </div>
          <div className="sub-banner">
            <Banner
              title="Plants"
              text="for home comfort"
              image={subBanner2}
              type="sub-banner"
            />
          </div>
        </div>
      </div>
      <ProductSlideShow
        title="New"
        api={PRODUCT_DETAIL_URL}
        isRelevant={false}
      />
      <ProductSlideShow
        title="Relevant"
        api={PRODUCT_DETAIL_URL}
        isRelevant={true}
      />
    </Container>
  );
};
const Container = styled.div`
  .banner-grid {
    margin: 30px 0;
    .sub-banner-wrapper {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 2rem;
    }
  }
`;
