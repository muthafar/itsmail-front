import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form } from "react-final-form";
import { Link, useHistory } from "react-router-dom";
import { submitSurvey } from "../actions";

const Surveynew = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="mb-3">
        <label className="form-label text-bold" htmlFor="">
          {label}
        </label>
        <input
          className="form-control"
          {...input}
          type="text"
          autoComplete="off"
        />
        {meta.error && meta.touched ? (
          <span class="text-danger mt-1">{meta.error}</span>
        ) : (
          ""
        )}
      </div>
    );
  };
  const onFormSubmit = (formValues) => {
    dispatch(submitSurvey(formValues));
    history.push("/surveys");
  };

  return (
    <div className="mt-3">
      <Form onSubmit={onFormSubmit} validate={formValidation}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field label="Survey Title" name="title" component={renderInput} />
            <Field
              label="Subject Line"
              name="subject"
              component={renderInput}
            />
            <Field label="Email Body" name="body" component={renderInput} />
            <Field
              label="Recipient List"
              name="recipients"
              component={renderInput}
            />
            <div className="d-flex justify-content-between">
              <Link to="/surveys">
                <button className="btn btn-danger btn-lg px-4">Cancel</button>
              </Link>

              <button className="btn btn-success btn-lg px-4">
                Send Survey <i class="bi bi-envelope ms-1"></i>
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

const re =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const emailValidation = (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);

  if (invalidEmails.length) {
    return `these emails are invalid:${invalidEmails}`;
  }
  return;
};

const formValidation = (values) => {
  const errors = {};
  errors.recipients = emailValidation(values.recipients || "");
  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.subject) {
    errors.subject = "You must provide a subject";
  }
  if (!values.body) {
    errors.body = "You must provide a body ";
  }
  if (!values.recipients) {
    errors.recipients = "You must provide emails";
  }

  return errors;
};

export default Surveynew;
