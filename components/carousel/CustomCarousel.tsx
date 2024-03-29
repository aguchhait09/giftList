// import "swiper/css";
// import { Swiper } from "swiper/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface HomeProps extends React.ComponentProps<typeof Slider> {
  children: React.ReactNode;
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

const CustomCarousel = ({ children, ...rest }: HomeProps) => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   scrollbar={{ draggable: true }}
    //   pagination={{ clickable: true }}
    //   {...rest}
    // >
    //   {children}
    // </Swiper>

    <Slider {...settings} {...rest}>
      {children}
    </Slider>
  );
};

export default CustomCarousel;
