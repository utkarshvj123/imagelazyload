import React, { memo, useEffect, useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import { getCompleteAlbums } from "./actions";
import "./style.scss";
const ImageAlbumRow = React.lazy(() =>
  import("../../components/ImageAlbumRow")
);

const Home = () => {
  const [currentState, setCurrentState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompleteAlbums()).then((response) => {
      setCurrentState(response?.data);
    });
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      {currentState?.length > 0 ? (
        currentState.map((images) => (
          <ImageAlbumRow data={images} key={images?.id} />
        ))
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </Suspense>
  );
};
export default memo(Home);
