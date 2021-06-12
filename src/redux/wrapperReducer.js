import { GET_IMAGES } from "../pages/Home/actions";

const initialState = {
  allImages: [],
};

export const wrapperReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return { allImages: action.payload };
    default:
      return state;
  }
};
