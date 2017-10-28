import axios from "axios";
import API_END_POINT from "../config/index";


const fetchCharacters = () => {
  return (dispatch) => {
    axios.get(API_END_POINT)
      .then((response) => {
        dispatch(receiveCharacters(response.data.results));
      })
      .catch((error) => {
        console.warn("error", error);
      });
  };
};

const receiveCharacters = (payload) => {
  return {
    type: "RECEIVE_CHARACTERS",
    payload
  };
}

export {
  fetchCharacters
};
