import "../assets/styles/UserProfile.css";

import React, { useContext, useEffect } from "react";

import { AuthContext } from "../context/authContext";
import { GET_USER_QUERY } from "../graphql/user";
import { useLazyQuery } from "@apollo/client";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [getUser, { data }] = useLazyQuery(GET_USER_QUERY);

  useEffect(() => {
    if (user && !user.email) {
      getUser({
        variables: { userId: user.id },
      });
    }
  }, [getUser, user]);

  const loadedUser = data?.getUser || user;

  const dateOfBirth = loadedUser?.dateOfBirth
    ? new Date(parseInt(loadedUser.dateOfBirth, 10))
    : null;

  const formattedDateOfBirth =
    dateOfBirth && !isNaN(dateOfBirth) ? dateOfBirth.toLocaleDateString() : "-";

  const userFields = [
    { label: "Type", value: loadedUser?.type || "-" },
    { label: "Email", value: loadedUser?.email || "-" },
    { label: "First name", value: loadedUser?.firstName || "-" },
    { label: "Last name", value: loadedUser?.lastName || "-" },
    { label: "Phone number", value: loadedUser?.phoneNumber || "-" },
    { label: "Date of birth", value: formattedDateOfBirth || "-" },
    { label: "Address", value: loadedUser?.address || "-" },
    { label: "Zip code", value: loadedUser?.zipCode || "-" },
    { label: "City", value: loadedUser?.city || "-" },
  ];

  return (
    <div className="user-profile-container">
      <h1>My data</h1>
      {userFields.map((field) => (
        <p key={field.label} className="user-profile-listing">
          {field.label}: {field.value}
        </p>
      ))}
    </div>
  );
};

export default UserProfile;
