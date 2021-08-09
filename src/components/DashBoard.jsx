import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./SurveyList";

const DashBoard = () => {
  return (
    <div>
      <SurveyList />
      <div>
        <Link to="/surveys/new">
          <i
            className="bi bi-plus-square-fill text-danger  "
            style={{ fontSize: "5rem" }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
