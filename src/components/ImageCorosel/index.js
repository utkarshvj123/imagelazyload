import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import SingleImageView from "../SingeImageView";

const ImageCorosel = ({ imageDetails }) => {
  const imagesRender = imageDetails.map((data) => {
    return <SingleImageView data={data} />;
  });

  return (
    <div className="image-slider-wrapper">
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={5}
        scrollOnDevice={true}
      >
        {imagesRender}
      </InfiniteCarousel>
    </div>
  );
};

export default ImageCorosel;
