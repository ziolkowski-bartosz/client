import "../assets/styles/UserProfile.css";

import { AuthContext } from "../context/authContext";
import React from "react";
import { useContext } from "react";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="user-profile-container">
      <p>Type: {user?.type || "-"}</p>
      <p>Email: {user?.email || "-"}</p>
      <p>First name: {user?.firstName || "-"}</p>
      <p>Last name: {user?.lastName || "-"}</p>
      <p>Phone number: {user?.phoneNumber || "-"}</p>
      <p>Date of birth: {user?.dateOfBirth || "-"}</p>
      <p>Address: {user?.address || "-"}</p>
      <p>Zip code: {user?.zipCode || "-"}</p>
      <p>City: {user?.city || "-"}</p>
    </div>
  );
};

export default UserProfile;
