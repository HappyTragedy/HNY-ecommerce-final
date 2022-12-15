import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Container, Formulario, Field } from "./Styled";

const CheckoutForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ email: "", name: "", phone: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please enter your name";
      }
      if (!values.phone) {
        errors.phone = "Please tell us your phone";
      }
      if (!values.email) {
        errors.email = "We need to know your mail";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Hmm... This mail is not valid";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        handleSubmit(values);
        setSubmitting(false);
      }, 1000);
    }}
  >
    {({ isSubmitting }) => (
      <Container>
        <Formulario id="my-form">
          <div className="titulo">
            <h1>Just one more step!</h1>
            <h3>Complete the fields to finalize your purchase</h3>
          </div>
          <Field
            placeholder="Name"
            type="text"
            name="name"
            autoComplete="off"
          />
          <ErrorMessage name="name" component="span" />
          <Field
            placeholder="Email"
            type="email"
            name="email"
            autoComplete="off"
          />
          <ErrorMessage name="email" component="span" />
          <Field
            placeholder="Phone"
            type="text"
            name="phone"
            autoComplete="off"
          />
          <ErrorMessage name="phone" component="span" />
          <button
            className="btn effect"
            data-sm-link-text="Submit"
            type="submit"
            disabled={isSubmitting}
          >
            <span>Ready?</span>
          </button>
        </Formulario>
      </Container>
    )}
  </Formik>
);

export default CheckoutForm;
