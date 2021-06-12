import axios from "axios";

export const GET_IMAGES = "GET_IMAGES";

const URL = "https://jsonplaceholder.typicode.com/";
const ALBUM_WITH_ID = "photos?albumId=";
const ALL_COMPLETE_ALBUMS = "albums";

export const getCompleteAlbums = () => async (dispatch) => {
  try {
    const newUrl = URL + ALL_COMPLETE_ALBUMS;
    const response = await axios.get(newUrl);
    return response;
  } catch (ex) {
    return Promise.reject(ex);
  }
};

export const getCompleteImagesFromId = (id) => async (dispatch) => {
  try {
    const newUrl = URL + ALBUM_WITH_ID + id;
    const response = await axios.get(newUrl);
    if (response?.status === 200) {
      dispatch({
        type: GET_IMAGES,
        payload: response?.data,
      });
    }
    return response;
  } catch (ex) {
    return Promise.reject(ex);
  }
};

// export const geStackExchanegeData =
// (newStartDate, newEndDate, pageSize, pageNumber) => async (dispatch) => {
//   try {
//     const newUrl = URL;
//     const response = await axios.get(newUrl);
//     if (response?.status === 200) {
//       dispatch({
//         type: GET_DATA,
//         payload: response?.data?.items,
//       });
//     }
//     return response;
//   } catch (ex) {
//     return ex;
//   }
// };
