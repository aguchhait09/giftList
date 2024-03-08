import { allProductsApi } from "@/api/functions/products.api";
import { ProductDataInterface } from "@/interface/productsDataInterface.interface";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Container, Typography, styled } from "@mui/material";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

const StyledContainer = styled(Container)`
  margin-top: 25px;
`;

export const getServerSideProps = async () => {
  const productsData = await allProductsApi();
  return { props: { productsData: productsData } };
};

interface HomeProps {
  productsData: ProductDataInterface;
}

const OwlCarousel = dynamic(
  () => import("@/components/carousel/CustomCarousel"),
  { ssr: false }
);

export default function Home({ productsData }: HomeProps) {
  // console.log("dta", productsData);

  return (
    <Wrapper>
      <StyledContainer>
        <OwlCarousel>
          {productsData?.map((cat) => {
            return (
              <>
                <SwiperSlide
                  style={{ boxShadow: "0px 0px 30px rbga(0, 0, 0, 0.1)" }}
                >
                  <img src={cat?.cat_thumbnail} alt="" height={20} />
                  <Typography variant="h4" sx={{ textAlign: "center" }}>
                    {cat?.title}
                  </Typography>
                </SwiperSlide>
              </>
            );
          })}
        </OwlCarousel>
      </StyledContainer>
    </Wrapper>
  );
}
