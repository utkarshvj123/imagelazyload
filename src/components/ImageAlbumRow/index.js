import React, { useEffect, memo } from "react";
import LazyLoad from "react-lazyload";
import ImageCorosel from "../ImageCorosel";
import { getCompleteImagesFromId } from "../../pages/Home/actions";
import { useDispatch, useSelector } from "react-redux";

const ImageAlbumRow = ({ data }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state?.wrapperReducer?.allImages);
  useEffect(() => {
    dispatch(getCompleteImagesFromId(data?.id));
  }, [dispatch, data?.id]);
  return (
    <LazyLoad height={200}>
      <div className="card m-2 ">
        {currentState?.length > 0 ? (
          <div className="heading-content-wrapper">
            <div className="card-header">
              <h5 className="p-0 m-0">{data.title}</h5>
              <span className="album_info02">{`id: ${data.id}, userid: ${data.userId}`}</span>
            </div>
            <ImageCorosel imageDetails={currentState} />
          </div>
        ) : (
          <div className="heading-content-wrapper">
            <div className="card-header">
              <h5 className="p-0 m-0">{data.title}</h5>
              <span className="album_info02">{`id: ${data.id}, userid: ${data.userId}`}</span>
            </div>
            <div style={{ height: 142 }}>Loading..</div>
          </div>
        )}
      </div>
    </LazyLoad>
  );
};
export default memo(ImageAlbumRow);
