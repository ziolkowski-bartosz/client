import React, { useState } from "react";

import { GrClose } from "react-icons/gr";
import { REGISTER_USER_MUTATION } from "../../graphql/user";
import { hashPassword } from "../../utils/helpFunctions";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { userDataValidation } from "../../utils/userDataValidation";

function RegisterForm(props) {
  const { isRegisterFormOpen, toggleRegisterForm } = props;
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toggleFormSuccess = () => {
    setIsFormSuccess((prevIsFormSuccess) => !prevIsFormSuccess);
  };

  const [registerUser, { loading: registerLoading }] = useMutation(
    REGISTER_USER_MUTATION,
    {
      onCompleted: () => {
        toggleFormSuccess();
        handleResetForm();
      },
      onError: (error) => {
        setRegisterError(error.message);
      },
    }
  );

  const onSubmit = async (data) => {
    const hashedPassword = await hashPassword(data.password);
    registerUser({
      variables: {
        input: {
          ...data,
          password: hashedPassword,
        },
      },
    });
  };

  const handleResetForm = () => {
    isFormSuccess && toggleFormSuccess();
    setRegisterError(null);
    reset();
  };

  return (
    <div className={`${isRegisterFormOpen ? "" : "hide"} form-background`}>
      <form className="popup-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-slogan">Join us foodie!</h2>
        <GrClose className="form-exit-btn" onClick={toggleRegisterForm} />

        <div className="form-group">
          <label className="form-label" htmlFor="firstName">
            First name
          </label>
          <input
            className="form-input"
            name="firstName"
            type="text"
            {...register("firstName", userDataValidation.firstName)}
          />
        </div>
        {errors.firstName && (
          <p className="form-warning">{errors.firstName.message}</p>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="lastName">
            Last name
          </label>
          <input
            className="form-input"
            name="lastName"
            type="text"
            {...register("lastName", userDataValidation.lastName)}
          />
        </div>
        {errors.lastName && (
          <p className="form-warning">{errors.lastName.message}</p>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="dateOfBirth">
            Birthday
          </label>
          <input
            className="form-input"
            name="dateOfBirth"
            type="date"
            {...register("dateOfBirth", userDataValidation.dateOfBirth)}
          />
        </div>
        {errors.dateOfBirth && (
          <p className="form-warning">{errors.dateOfBirth.message}</p>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="address">
            Address
          </label>
          <input
            className="form-input"
            name="address"
            type="text"
            {...register("address", userDataValidation.address)}
          />
        </div>
        {errors.address && (
          <p className="form-warning">{errors.address.message}</p>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="zipCode">
            Zip code
          </label>
          <input
            className="form-input"
            name="zipCode"
            type="text"
            {...register("zipCode", userDataValidation.zipCode)}
          />
        </div>
        {errors.zipCode && (
          <p className="form-warning">{errors.zipCode.message}</p>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="city">
            City
          </label>
          <input
            className="form-input"
            name="city"
            type="text"
            {...register("city", userDataValidation.city)}
          />
        </div>
        {errors.city && <p className="form-warning">{errors.city.message}</p>}

        <div className="form-group">
          <label className="form-label" htmlFor="phoneNumber">
            Telephone
          </label>
          <input
            className="form-input"
            name="phoneNumber"
            type="tel"
            {...register("phoneNumber", userDataValidation.phoneNumber)}
          />
        </div>
        {errors.phoneNumber && (
          <p className="form-warning">{errors.phoneNumber.message}</p>
        )}

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
          (isFormSuccess && <p className="form-success">Account created!</p>) ||
          (registerError && <p className="form-warning">{registerError}</p>)
        )}

        <div className="form-group">
          <button type="submit" disabled={isFormSuccess} className="form-btn">
            {registerLoading ? "Loading..." : "Sign up"}
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

export default RegisterForm;
