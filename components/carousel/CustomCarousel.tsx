import "swiper/css";
import { Swiper } from "swiper/react";

interface HomeProps extends React.ComponentProps<typeof Swiper> {
  children: React.ReactNode;
}

const CustomCarousel = ({ children, ...rest }: HomeProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      {...rest}
    >
      {children}
    </Swiper>
  );
};

export default CustomCarousel;
