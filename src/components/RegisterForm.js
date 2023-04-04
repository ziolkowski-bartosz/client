import { REGISTER_USER_MUTATION } from "../graphql/user";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { userDataValidation } from "../utils/userDataValidation";

const StyledRegisterForm = styled.form`
  top: calc((25vh - 5.25rem) / 2);

  width: 35%;
  min-height: 75vh;
`;

function RegisterForm(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [registerUser, { error }] = useMutation(REGISTER_USER_MUTATION, {
    onCompleted() {
      props.handleFormSuccess();
      reset();
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await registerUser({
      variables: {
        input: {
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
          address: data.address,
          zipCode: data.zipCode,
          city: data.city,
          phoneNumber: data.phoneNumber,
          email: data.email,
          password: data.password,
        },
      },
    });
  };

  const resetForm = () => {
    props.isFormSuccess && props.handleFormSuccess();
    reset();
  };

  return (
    <div className={`${props.isShowRegister ? "" : "hide"} form-background`}>
      <StyledRegisterForm
        className="popup-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="form-slogan">Join us foodie!</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">
            First name
          </label>
          <input
            className="form-input"
            name="firstName"
            {...register("firstName", userDataValidation.firstName)}
          />
        </div>
        <p className="form-warning">
          {errors?.firstName && errors.firstName.message}
        </p>
        <div className="form-group">
          <label className="form-label" htmlFor="lastName">
            Last name
          </label>
          <input
            className="form-input"
            name="lastName"
            {...register("lastName", userDataValidation.lastName)}
          />
        </div>
        <p className="form-warning">
          {errors?.lastName && errors.lastName.message}
        </p>
        <div className="form-group">
          <label className="form-label" htmlFor="dateOfBirth">
            Date of birth
          </label>
          <input
            className="form-input"
            name="dateOfBirth"
            type="date"
            {...register("dateOfBirth", userDataValidation.dateOfBirth)}
          />
        </div>
        <p className="form-warning">
          {errors?.dateOfBirth && errors.dateOfBirth.message}
        </p>
        <div className="form-group">
          <label className="form-label" htmlFor="address">
            Address
          </label>
          <input
            className="form-input"
            name="address"
            {...register("address", userDataValidation.address)}
          />
        </div>
        <p className="form-warning">
          {errors?.address && errors.address.message}
        </p>
        <div className="form-group">
          <label className="form-label" htmlFor="zipCode">
            Zip code
          </label>
          <input
            className="form-input"
            name="zipCode"
            {...register("zipCode", userDataValidation.zipCode)}
          />
        </div>
        <pl className="form-warning">
          {errors?.zipCode && errors.zipCode.message}
        </pl>
        <div className="form-group">
          <label className="form-label" htmlFor="city">
            City
          </label>
          <input
            className="form-input"
            name="city"
            {...register("city", userDataValidation.city)}
          />
        </div>
        <p className="form-warning">{errors?.city && errors.city.message}</p>
        <div className="form-group">
          <label className="form-label" htmlFor="phoneNumber">
            Phone number
          </label>
          <input
            className="form-input"
            name="phoneNumber"
            {...register("phoneNumber", userDataValidation.phoneNumber)}
          />
        </div>
        <p className="form-warning">
          {errors?.phoneNumber && errors.phoneNumber.message}
        </p>
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
          <button
            disabled={props.isFormSuccess}
            type="submit"
            className="form-btn submit-btn"
          >
            {props.isFormSuccess
              ? "Foodie created! Please sign in."
              : "Sign up"}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="form-btn reset-btn"
          >
            Clear
          </button>
        </div>
      </StyledRegisterForm>
    </div>
  );
}

export default RegisterForm;
