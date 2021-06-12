import React from "react";
import LazyLoad from "react-lazyload";

const SingleImageView = ({ data }) => {
  return (
    <div className="image-styling" key={data.id}>
      <LazyLoad height={200}>
        <img src={data.url} alt={data.title} height="142" width="142"></img>
        <label>{data.title.substring(0, 20) + "..."}</label>
        <p className="image-para">{`Id: ${data.id}`}</p>
      </LazyLoad>
    </div>
  );
};

export default SingleImageView;
