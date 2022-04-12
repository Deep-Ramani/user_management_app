import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate, } from "react-router-dom";
import "./App.css";
import routes from './config/routes';
// import { HomePage } from "./pages/HomePage";
// import { SignupPage } from "./pages/SignupPage";
import { UserRegister } from "./redux/action/action";
import PrivateRoutes from './containers/PrivateRoutes'
import PublicRoutes from './containers/PublicRoutes'


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("userData"))){
      dispatch(UserRegister(JSON.parse(localStorage.getItem("userData"))))
    }
  },[dispatch]);

  return (
    // <div>
    //   <SignupPage />
    //   <HomePage />
    // </div>

    <Routes>
      {
        Object.keys(routes).map(key=>{
          const value = routes[key];
          const {id, name, description, path, isPrivate, element} = value;

          return(
            isPrivate ?
            (
              <Route id={id} name={name} description={description} path={path} element={PrivateRoutes(element)} key={key} />
            )
            : (
              <Route id={id} name={name} description={description} path={path} element={PublicRoutes(element)} key={key} />
            )
          )
        })
      }
            <Route path='/' element={<Navigate to='/homePage' replace />} />
    </Routes>
  );
}

export default App;
