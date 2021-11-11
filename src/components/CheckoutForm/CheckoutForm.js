import React from "react";
import { Formik, ErrorMessage } from "formik";
import { Container, Button, Formulario, Field } from "./Styled";


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
          <Field placeholder="Name" type="text" name="name" autoComplete= "off"/>
          <ErrorMessage name="name" component="span" />
          <Field placeholder="Email" type="email" name="email" autoComplete= "off"/>
          <ErrorMessage name="email" component="span" />
          <Field placeholder="Phone" type="text" name="phone" autoComplete= "off"/>
          <ErrorMessage name="phone" component="span" />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Formulario>
      </Container>
    )}
  </Formik>
);


export default CheckoutForm;
