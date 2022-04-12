export const UserRegister = (user) =>{
  
  // localStorage.setItem("userData", JSON.stringify(user));
  return {
    type : "UserRegistration",
    payload : user,
  }
}

export const logOut = () =>{
  localStorage.removeItem("userData");
  return {
    type: 'LOGOUT'
}
}