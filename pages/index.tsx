import {
  allProductsApi,
  categoryWiseProductsApi
} from "@/api/functions/products.api";
import CustomCard from "@/components/CustomCard/CustomCard";
import { CatWiseProductsInterface } from "@/interface/catProducts.interface";
import { ProductDataInterface } from "@/interface/productsDataInterface.interface";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Container, Typography, styled } from "@mui/material";
import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

const StyledContainer = styled(Container)`
  margin-top: 25px;
`;
const StyledTypography = styled(Typography)`
  margin: 10px;
  color: black;
  font-size: 20px;
  font-family: Times-New-Roman;
  font-weight: bold;
`;

interface HomeProps {
  productsData: ProductDataInterface;
  catWiseData: CatWiseProductsInterface;
}

const Carousel = dynamic(() => import("@/components/carousel/CustomCarousel"), {
  ssr: false
});

export default function Home({ productsData, catWiseData }: HomeProps) {
  console.log("dta", catWiseData);

  return (
    <Wrapper>
      <StyledContainer>
        {/* Category Start */}
        <StyledTypography>CATEGORIES</StyledTypography>
        <Carousel>
          {productsData?.map((cat) => {
            return (
              <>
                <div
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                    margin: "18px",
                    borderRadius: "10px",
                    padding: "10px"
                  }}
                >
                  <img src={cat?.cat_thumbnail} alt="" height={20} />
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {cat?.title}
                  </Typography>
                </div>
              </>
            );
          })}
        </Carousel>
        {/* End Category */}
        {/* Start Trending Gift */}

        {/* End Trending Gift */}
        {/* Category Wise Product Start */}
        {catWiseData?.all_products?.map((cat) => {
          return (
            <>
              <StyledTypography>{cat?.title?.toUpperCase()}</StyledTypography>
              <Carousel slidesToShow={4} slidesToScroll={4}>
                {cat?.products?.map((product) => {
                  return (
                    <>
                      <div
                        style={{
                          backgroundColor: "white",
                          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
                          margin: "18px",
                          borderRadius: "10px",
                          padding: "10px"
                        }}
                      >
                        <CustomCard
                          title={product?.brand_name}
                          subtitle={product?.product_name.slice(0, 20) + "..."}
                          cardImage={`${assest.story_img}`}
                          price={product?.product_price}
                          offerPrice={product?.product_sale_price}
                        />
                      </div>
                    </>
                  );
                })}
              </Carousel>
            </>
          );
        })}
        {/* Category Wise Product End */}
      </StyledContainer>
    </Wrapper>
  );
}

export const getServerSideProps = async () => {
  const productsData = await allProductsApi();
  const catWiseData = await categoryWiseProductsApi();
  return { props: { productsData: productsData, catWiseData: catWiseData } };
};
