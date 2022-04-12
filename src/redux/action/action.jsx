export const UserRegister = (user) =>{
  localStorage.setItem("userData", JSON.stringify(user));
  return {
    type : "UserRegistration",
    payload : user,
  }
}