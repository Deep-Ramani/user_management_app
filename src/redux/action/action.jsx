export const UserRegister = (user) => {
  return {
    type: "UserRegistration",
    payload: user,
  };
};

export const logOut = () => {
  localStorage.removeItem("userData");
  return {
    type: "LOGOUT",
  };
};
