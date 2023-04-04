import "../assets/styles/Forms.css";
import "react-toastify/dist/ReactToastify.min.css";

import React, { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { userDataValidation } from "../utils/userDataValidation";

const ContactFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  width: 100%;
  min-height: 30vh;

  font-family: Helvetica, sans-serif;

  input,
  textarea {
    width: 90%;
    min-height: 5vh;
  }
`;

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSuccess = () => {
    toast("Form has just been submitted!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    const templateParams = {
      name,
      email,
      subject,
      message,
    };
    await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_USER_ID
    );
    reset();
    formSuccess();
  };

  return (
    <div className="inbuilt-form">
      <h2 className="form-slogan">Feel free to contact us</h2>
      <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            className="form-control"
            name="firstName"
            {...register("firstName", userDataValidation.firstName)}
            placeholder="First name"
          />
          <input
            className="form-control"
            name="email"
            {...register("email", userDataValidation.email)}
            placeholder="Email address"
          />
        </div>
        <p className="form-warning">
          {(errors?.firstName && errors.firstName.message) ||
            (errors?.email && errors.email.message)}
        </p>
        <div className="form-group">
          <input
            className="form-control"
            name="subject"
            {...register("subject", userDataValidation.subject)}
            placeholder="Subject..."
          ></input>
        </div>
        <p className="form-warning">
          {errors?.subject && errors.subject.message}
        </p>
        <div className="form-group">
          <textarea
            className="form-control"
            rows={3}
            name="message"
            {...register("message", userDataValidation.message)}
            placeholder="Your message..."
          ></textarea>
        </div>
        <p className="form-warning">
          {errors?.message && errors.message.message}
        </p>
        <div className="form-group">
          <button type="submit" className="form-btn submit-btn">
            Submit
          </button>
        </div>
        <ToastContainer />
      </ContactFormContainer>
    </div>
  );
}

export default ContactForm;
