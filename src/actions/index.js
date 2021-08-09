import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get(`/api/current_user`);

  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
};

export const handleToken = (token) => async (dispatch) => {
  const { data } = await axios.post(`/api/stripe`, token);
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
};

export const submitSurvey = (values) => async (dispatch) => {
  const { data } = await axios.post("/api/surveys", values);

  dispatch({
    type: "SUBMIT_SURVEY",
    payload: data,
  });
};

export const fetchSurveys = () => async (dispatch) => {
  const { data } = await axios.get(`/api/surveys`);

  dispatch({
    type: "FETCH_SURVEYS",
    payload: data,
  });
};
