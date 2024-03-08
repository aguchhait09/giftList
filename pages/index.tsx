import { allProductsApi } from "@/api/functions/products.api";
import CustomCard from "@/components/CustomCard/CustomCard";
import StorySec from "@/components/StorySec/StorySec";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import { ProductDataInterface } from "@/interface/productsDataInterface.interface";
import assest from "@/json/assest";
import { cardList } from "@/json/mock/cardlist.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Container, styled } from "@mui/material";
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
        <OwlCarousel productsData={productsData} />
      </StyledContainer>
    </Wrapper>
  );
}
