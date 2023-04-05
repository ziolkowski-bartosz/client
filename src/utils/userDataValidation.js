const validateDate = (value) => {
  const selected = new Date(value).getFullYear();
  const now = new Date().getFullYear();
  return now - selected >= 18 || "You must be 18+";
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
    return "At least one special character";
  } else {
    return true;
  }
};

export const userDataValidation = {
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
