import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

import { GrClose } from "react-icons/gr";
import { UPDATE_USER_DATA_MUTATION } from "../../graphql/user";
import { useMutation } from "@apollo/client";
import { userDataValidation } from "../../utils/userDataValidation";

const UpdateUserDataForm = (props) => {
  const { user, userBirthday } = props;
  const [updateDataError, setUpdateDataError] = useState("");

  const [updateUserData, { loading: updateUserDataLoading }] = useMutation(
    UPDATE_USER_DATA_MUTATION,
    {
      onCompleted: () => {
        props.refetchUserData();
        props.toggleUpdateUserData();
      },
      onError: (error) => {
        setUpdateDataError(error.message);
      },
    }
  );

  return (
    <div
      className={`${
        props.isUpdateUserDataOpen ? "" : "hide"
      } form-background top-0`}
    >
      <Formik
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          dateOfBirth: userBirthday,
          address: user.address,
          zipCode: user.zipCode,
          city: user.city,
          phoneNumber: user.phoneNumber,
        }}
        onSubmit={(values, { setSubmitting }) => {
          updateUserData({
            variables: {
              input: {
                firstName: values.firstName,
                lastName: values.lastName,
                dateOfBirth: values.dateOfBirth,
                address: values.address,
                zipCode: values.zipCode,
                city: values.city,
                phoneNumber: values.phoneNumber,
              },
            },
          }).then(() => {
            setSubmitting(false);
          });
        }}
      >
        {({ errors, touched, ...formikProps }) => (
          <Form className="popup-form">
            <h2 className="form-slogan">Edit your data</h2>
            <GrClose
              className={`${
                props.isUpdateUserDataOpen ? "active" : ""
              } form-exit-btn`}
              onClick={props.toggleUpdateUserData}
            />

            <div className="form-group">
              <label className="form-label" htmlFor="firstName">
                First name
              </label>
              <Field
                id="firstName"
                className="form-input"
                name="firstName"
                validate={userDataValidation.firstName.validate}
              />
            </div>
            {touched.firstName && errors.firstName && (
              <p className="form-warning">{errors.firstName}</p>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="lastName">
                Last name
              </label>
              <Field
                id="lastName"
                className="form-input"
                name="lastName"
                validate={userDataValidation.lastName.validate}
              />
            </div>
            {touched.lastName && errors.lastName && (
              <p className="form-warning">{errors.lastName}</p>
            )}

            <div className="form-group ">
              <label className="form-label" htmlFor="dateOfBirth">
                Birthday
              </label>
              <Field
                id="dateOfBirth"
                className="form-input"
                name="dateOfBirth"
                type="date"
                validate={userDataValidation.dateOfBirth.validate}
              />
            </div>
            {touched.dateOfBirth && errors.dateOfBirth && (
              <p className="form-warning">{errors.dateOfBirth}</p>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="address">
                Address
              </label>
              <Field
                id="address"
                className="form-input"
                name="address"
                type="text"
                validate={userDataValidation.address.validate}
              />
            </div>
            {touched.address && errors.address && (
              <p className="form-warning">{errors.address}</p>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="zipCode">
                Zip code
              </label>
              <Field
                id="zipCode"
                className="form-input"
                name="zipCode"
                type="text"
                validate={userDataValidation.zipCode.validate}
              />
            </div>
            {touched.zipCode && errors.zipCode && (
              <p className="form-warning">{errors.zipCode}</p>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="city">
                City
              </label>
              <Field
                id="city"
                className="form-input"
                name="city"
                type="text"
                validate={userDataValidation.city.validate}
              />
            </div>
            {touched.city && errors.city && (
              <p className="form-warning">{errors.city}</p>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="phoneNumber">
                Telephone
              </label>
              <Field
                id="phoneNumber"
                className="form-input"
                name="phoneNumber"
                type="tel"
                validate={userDataValidation.phoneNumber.validate}
              />
            </div>
            {(touched.phoneNumber && errors.phoneNumber && (
              <p className="form-warning">{errors.phoneNumber}</p>
            )) ||
              (updateDataError && (
                <p className="form-warning">{updateDataError}</p>
              ))}

            <div className="form-group">
              <button
                type="submit"
                className="form-btn"
                disabled={formikProps.isSubmitting}
              >
                {(formikProps.isSubmitting && formikProps.dirty) ||
                updateUserDataLoading
                  ? "Updating..."
                  : "Update"}
              </button>
              <button
                type="button"
                onClick={() => {
                  formikProps.resetForm();
                  setUpdateDataError("");
                }}
                className="form-btn reset-btn"
              >
                Reset
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateUserDataForm;
