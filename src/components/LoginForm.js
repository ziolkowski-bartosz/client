import React, { useContext } from "react";

import { AuthContext } from "../context/authContext";
import { LOGIN_USER_MUTATION } from "../graphql/user";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { userDataValidation } from "../utils/userDataValidation";

const StyledLoginForm = styled.form`
  top: calc((70vh - 5.25rem) / 2);

  width: 25%;
  min-height: 30vh;
`;

function LoginForm(props) {
  const context = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loginUser, { error }] = useMutation(LOGIN_USER_MUTATION, {
    onCompleted: (data) => {
      context.login(data.login);
      props.handleShowLogin();
      resetForm();
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  };

  const resetForm = () => {
    reset();
  };

  return (
    <div className={`${props.isShowLogin ? "" : "hide"} form-background`}>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)} className="popup-form">
        <h2 className="form-slogan">Welcome foodie!</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            name="email"
            {...register("email", userDataValidation.email)}
          />
        </div>
        <p className="form-warning">{errors?.email && errors.email.message}</p>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            name="password"
            type="password"
            {...register("password", userDataValidation.password)}
          />
        </div>
        <p className="form-warning">
          {(errors?.password && errors.password.message) || error?.message}
        </p>
        <div className="form-group">
          <button type="submit" className="form-btn submit-btn">
            Sign in
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="form-btn reset-btn"
          >
            Clear
          </button>
        </div>
      </StyledLoginForm>
    </div>
  );
}

export default LoginForm;
