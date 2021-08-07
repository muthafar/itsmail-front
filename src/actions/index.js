import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get("/api/current_user");
  console.log(data);
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
};

export const handleToken = (token) => async (dispatch) => {
  const { data } = await axios.post("/api/stripe", token);
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
};
