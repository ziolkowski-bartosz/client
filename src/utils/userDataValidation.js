const validateDate = (value) => {
  const selected = new Date(value).getFullYear();
  const now = new Date().getFullYear();
  return now - selected >= 18 ? null : "You must be 18+";
};

const validatePassword = (value) => {
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;

  const uppercasePassword = uppercaseRegExp.test(value);
  const lowercasePassword = lowercaseRegExp.test(value);
  const digitsPassword = digitsRegExp.test(value);
  const specialCharPassword = specialCharRegExp.test(value);

  if (!uppercasePassword) {
    return "At least one uppercase";
  } else if (!lowercasePassword) {
    return "At least one lowercase";
  } else if (!digitsPassword) {
    return "At least one digit";
  } else if (!specialCharPassword) {
    return userDataValidation.password.minLength.message;
  } else if (value.length < 8) {
    return "Min 8 characters";
  } else {
    return true;
  }
};

const validateFirstName = (value) => {
  if (!value) {
    return userDataValidation.firstName.required;
  } else if (!userDataValidation.firstName.pattern.value.test(value)) {
    return userDataValidation.firstName.pattern.message;
  } else if (value.length < userDataValidation.firstName.minLength.value) {
    return userDataValidation.firstName.minLength.message;
  } else if (value.length > userDataValidation.firstName.maxLength.value) {
    return userDataValidation.firstName.maxLength.message;
  }
  return null;
};

const validateLastName = (value) => {
  if (!value) {
    return userDataValidation.lastName.required;
  } else if (!userDataValidation.lastName.pattern.value.test(value)) {
    return userDataValidation.lastName.pattern.message;
  } else if (value.length < userDataValidation.lastName.minLength.value) {
    return userDataValidation.lastName.minLength.message;
  } else if (value.length > userDataValidation.lastName.maxLength.value) {
    return userDataValidation.lastName.maxLength.message;
  }
  return null;
};

const validateAddress = (value) => {
  if (!value) {
    return userDataValidation.address.required;
  } else if (!userDataValidation.address.pattern.value.test(value)) {
    return userDataValidation.address.pattern.message;
  } else if (value.length < userDataValidation.address.minLength.value) {
    return userDataValidation.address.minLength.message;
  } else if (value.length > userDataValidation.address.maxLength.value) {
    return userDataValidation.address.maxLength.message;
  }
  return null;
};

const validateZipCode = (value) => {
  if (!value) {
    return userDataValidation.zipCode.required;
  } else if (!userDataValidation.zipCode.pattern.value.test(value)) {
    return userDataValidation.zipCode.pattern.message;
  } else if (value.length < userDataValidation.zipCode.minLength.value) {
    return userDataValidation.zipCode.minLength.message;
  } else if (value.length > userDataValidation.zipCode.maxLength.value) {
    return userDataValidation.zipCode.maxLength.message;
  }
  return null;
};

const validateCity = (value) => {
  if (!value) {
    return userDataValidation.city.required;
  } else if (!userDataValidation.city.pattern.value.test(value)) {
    return userDataValidation.city.pattern.message;
  } else if (value.length < userDataValidation.city.minLength.value) {
    return userDataValidation.city.minLength.message;
  } else if (value.length > userDataValidation.city.maxLength.value) {
    return userDataValidation.city.maxLength.message;
  }
  return null;
};

const validatePhoneNumber = (value) => {
  if (!value) {
    return userDataValidation.phoneNumber.required;
  } else if (!userDataValidation.phoneNumber.pattern.value.test(value)) {
    return userDataValidation.phoneNumber.pattern.message;
  } else if (value.length < userDataValidation.phoneNumber.minLength.value) {
    return userDataValidation.phoneNumber.minLength.message;
  }
  return null;
};

export const userDataValidation = {
  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Min 2 characters",
    },
    maxLength: {
      value: 50,
      message: "Max 50 characters",
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Only characters",
    },
  },
  firstName: {
    required: "First name is required",
    minLength: {
      value: 2,
      message: "Min 2 characters",
    },
    maxLength: {
      value: 40,
      message: "Max 40 characters",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Only characters",
    },
    validate: validateFirstName,
  },
  lastName: {
    required: "Last name is required",
    minLength: {
      value: 2,
      message: "Min 2 characters",
    },
    maxLength: {
      value: 40,
      message: "Max 40 characters",
    },
    pattern: {
      value: /^[A-ZÆØÅa-zæøå]+$/,
      message: "Only characters",
    },
    validate: validateLastName,
  },
  dateOfBirth: {
    required: "Date of birth is required",
    validate: validateDate,
  },
  address: {
    required: "Address is required",
    minLength: {
      value: 5,
      message: "Min 2 characters",
    },
    maxLength: {
      value: 35,
      message: "Max 35 characters",
    },
    pattern: {
      value: /^[A-ZÆØÅa-zæøå0-9\s]+$/,
      message: "Invalid address",
    },
    validate: validateAddress,
  },
  zipCode: {
    required: "Zip code is required",
    minLength: {
      value: 4,
      message: "Min 4 characters",
    },
    maxLength: {
      value: 20,
      message: "Max 20 characters",
    },
    pattern: {
      value: /^\d{4}$/,
      message: "Invalid zip code",
    },
    validate: validateZipCode,
  },
  city: {
    required: "City is required",
    minLength: {
      value: 3,
      message: "Min 3 characters",
    },
    maxLength: {
      value: 25,
      message: "Max 25 characters",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Only characters",
    },
    validate: validateCity,
  },
  phoneNumber: {
    required: "Phone number is required",
    minLength: {
      value: 7,
      message: "Min 7 characters",
    },
    pattern: {
      value: /^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\s.]|\d)+$/,
      message: "Invalid phone number",
    },
    validate: validatePhoneNumber,
  },
  email: {
    required: "Email is required",
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Min 8 characters",
    },
    validate: validatePassword,
  },
  subject: {
    required: {
      value: true,
      message: "Please enter a subject",
    },
    maxLength: {
      value: 75,
      message: "Max 75 characters",
    },
  },
  message: {
    required: {
      value: true,
      message: "Please enter a message",
    },
  },
};
