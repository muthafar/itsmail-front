import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../actions";

const SurveyList = () => {
  const dispatch = useDispatch();
  const surveys = useSelector((state) => state.surveys);
  console.log(surveys);

  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  const renderSurveys = () => {
    return surveys.map((survey) => {
      return (
        <div key={survey._id} class="card mt-1">
          <div class="card-body">
            <h5 class="card-title">{survey.title}</h5>

            <p class="card-text">{survey.body}</p>
          </div>
          <div className="m-3">
            <button className="btn btn-success me-2">Yes:{survey.yes}</button>

            <button className="btn btn-danger">No:{survey.no}</button>
          </div>
        </div>
      );
    });
  };

  return <div>{surveys ? renderSurveys() : ""}</div>;
};

export default SurveyList;
