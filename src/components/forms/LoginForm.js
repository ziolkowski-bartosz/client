import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/authContext";
import { GrClose } from "react-icons/gr";
import { LOGIN_USER_MUTATION } from "../../graphql/user";
import { hashPassword } from "../../utils/helpFunctions";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { userDataValidation } from "../../utils/userDataValidation";

function LoginForm(props) {
  const { isLoginFormOpen, toggleLoginForm } = props;
  const context = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loginUser] = useMutation(LOGIN_USER_MUTATION, {
    onCompleted: (data) => {
      context.login(data.login);
      toggleLoginForm();
      handleResetForm();
    },
    onError: (error) => {
      setLoginError(error.message);
    },
  });

  const onSubmit = async (data) => {
    const hashedPassword = await hashPassword(data.password);
    loginUser({ variables: { email: data.email, password: hashedPassword } });
  };

  const handleResetForm = () => {
    setLoginError(null);
    reset();
  };

  return (
    <div className={`${isLoginFormOpen ? "" : "hide"} form-background`}>
      <form className="popup-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-slogan">Welcome foodie!</h2>
        <GrClose className="form-exit-btn" onClick={toggleLoginForm} />

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            name="email"
            type="email"
            {...register("email", userDataValidation.email)}
          />
        </div>
        {errors.email && <p className="form-warning">{errors.email.message}</p>}

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
        {errors.password ? (
          <p className="form-warning">{errors.password.message}</p>
        ) : (
          loginError && <p className="form-warning">{loginError}</p>
        )}

        <div className="form-group">
          <button type="submit" className="form-btn">
            Sign in
          </button>
          <button
            type="button"
            onClick={handleResetForm}
            className="form-btn reset-btn"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
