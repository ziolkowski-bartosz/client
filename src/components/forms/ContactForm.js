import "../../assets/styles/Forms.css";
import "react-toastify/dist/ReactToastify.min.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { userDataValidation } from "../../utils/userDataValidation";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSuccess = () => {
    setIsSubmitting(false);
    toast("Form submitted!", {
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
    setIsSubmitting(true);
    const { name, email, subject, message } = data;
    const templateParams = {
      name,
      email,
      subject,
      message,
    };
    await emailjs.send(
      functions.config().polenix.reactapp.service_id,
      functions.config().polenix.reactapp.template_id,
      templateParams,
      functions.config().polenix.reactapp.user_id
    );
    reset();
    formSuccess();
  };

  return (
    <form className="inbuilt-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-slogan">Feel free to contact us</h2>

      <div className="form-group">
        <input
          className="form-control form-input"
          name="name"
          type="text"
          {...register("name", userDataValidation.name)}
          placeholder="Name"
        />
      </div>
      {errors.name && <p className="form-warning">{errors.name.message}</p>}

      <div className="form-group">
        <input
          className="form-control form-input"
          name="email"
          type="email"
          {...register("email", userDataValidation.email)}
          placeholder="Email address"
        />
      </div>
      {errors.email && <p className="form-warning">{errors.email.message}</p>}

      <div className="form-group">
        <input
          className="form-control form-input"
          name="subject"
          type="text"
          {...register("subject", userDataValidation.subject)}
          placeholder="Subject..."
        />
      </div>
      {errors.subject && (
        <p className="form-warning">{errors.subject.message}</p>
      )}

      <div className="form-group">
        <textarea
          className="form-control form-input"
          rows={3}
          name="message"
          {...register("message", userDataValidation.message)}
          placeholder="Your message..."
        ></textarea>
      </div>
      {errors.message && (
        <p className="form-warning">{errors.message.message}</p>
      )}

      <div className="form-group">
        <button type="submit" className="form-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
