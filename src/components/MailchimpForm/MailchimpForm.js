import React, { useState, useEffect } from "react";
import "./Styled";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Field, Container, Formulario } from "./Styled";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      name &&
      phone &&
      email.toString().indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: name,
        MERGE2: phone,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <Formulario id="my-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="titulo">
        <h1>Just one more step!</h1>
        <h3>Complete the fields to finalize your purchase</h3>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">sending...</div>
        )}
        {status === "error" && (
          <div
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>

      {status !== "success" ? (
        <Container>
          <Field
            label="Name"
            onChange={setName}
            type="text"
            defaulvalue={name}
            placeholder="Name"
            required
          />

          <Field
            label="Email"
            onChange={setEmail}
            type="email"
            defaulvalue={email}
            placeholder="your@email.com"
            required
          />

          <Field
            label="Phone"
            onChange={setPhone}
            type="text"
            defaultvalue={phone}
            placeholder="4444-4444"
            required
          />

          <button
            className="btn effect"
            data-sm-link-text="Submit"
            label="subscribe"
            type="submit"
            formvalues={[email, name, phone]}
          >
            <span>Ready?</span>
          </button>
        </Container>
      ) : null}
    </Formulario>
  );
};

const MailchimpForm = () => {
  const postUrl = ` https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

export default MailchimpForm;
