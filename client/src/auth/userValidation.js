export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email cannot be empty";
    } else if (!emailRegex.test(email)) {
      return "Wrong email format!";
    }
    return "";
  };
  
  export const validatePassword = (password) => {
    if (!password) {
      return "Password cannot be empty";
    } else if (password.length < 6) {
      return "Password must have at least 6 characters";
    }
    return "";
  };
  