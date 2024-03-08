import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductDataInterface } from "@/interface/productsDataInterface.interface";
import CustomCard from "../CustomCard/CustomCard";
import { Typography } from "@mui/material";

interface HomeProps {
  productsData: ProductDataInterface;
}

const CustomCarousel = ({ productsData }: HomeProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
    >
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
    </Swiper>
  );
};

export default CustomCarousel;
