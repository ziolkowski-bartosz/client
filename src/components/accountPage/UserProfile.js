import "../../assets/styles/UserProfile.css";

import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/authContext";
import { GET_USER_QUERY } from "../../graphql/user";
import UpdateUserDataForm from "../forms/UpdateUserDataForm";
import { formatDateOfBirth } from "../../utils/helpFunctions";
import { useQuery } from "@apollo/client";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [isUpdateUserDataOpen, setIsUpdateUserDataOpen] = useState(false);
  const [loadedUser, setLoadedUser] = useState(user ?? {});
  const DEFAULT_LABEL = "-";

  const toggleUpdateUserData = () => {
    setIsUpdateUserDataOpen((prevIsShow) => !prevIsShow);
  };

  const { refetch, loading } = useQuery(GET_USER_QUERY, {
    variables: { userId: user?.id },
    skip: user?.id === undefined || user.email !== undefined,
    onCompleted: (data) => {
      setLoadedUser(data.getUser);
    },
  });

  const formattedDateOfBirth = formatDateOfBirth(loadedUser.dateOfBirth);

  const userFields = [
    { label: "Type", value: loadedUser.type || DEFAULT_LABEL },
    { label: "Email", value: loadedUser.email || DEFAULT_LABEL },
    { label: "First name", value: loadedUser.firstName || DEFAULT_LABEL },
    { label: "Last name", value: loadedUser.lastName || DEFAULT_LABEL },
    { label: "Phone number", value: loadedUser.phoneNumber || DEFAULT_LABEL },
    { label: "Date of birth", value: formattedDateOfBirth },
    { label: "Address", value: loadedUser.address || DEFAULT_LABEL },
    { label: "Zip code", value: loadedUser.zipCode || DEFAULT_LABEL },
    { label: "City", value: loadedUser.city || DEFAULT_LABEL },
  ];

  return (
    <div className="user-profile-container">
      <h1 className="form-slogan user-slogan">My data</h1>
      {loadedUser.email ? (
        <>
          <button className="form-btn" onClick={toggleUpdateUserData}>
            Edit your data
          </button>
          {userFields.map((field) => (
            <p key={field.label} className="user-profile-listing">
              {field.label}: {field.value}
            </p>
          ))}
          <UpdateUserDataForm
            isUpdateUserDataOpen={isUpdateUserDataOpen}
            toggleUpdateUserData={toggleUpdateUserData}
            refetchUserData={refetch}
            user={loadedUser}
            userBirthday={formattedDateOfBirth}
          />
        </>
      ) : (
        <p className="user-profile-listing">
          {!user ? "Login first" : loading ? "Loading..." : "Failed to fetch"}
        </p>
      )}
    </div>
  );
};

export default UserProfile;
