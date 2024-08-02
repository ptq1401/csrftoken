import UserContext from "./UserContext";
import { useState, useEffect } from "react";
//--------------------------
const UserProvider = (props) => {
  //--hooks---
  const [login, setLogin] = useState(false);
  const setLoginFunction = (isLogin) => {
    setLogin(isLogin);
  };

  //--
  const value = {
    login: login,
    setLoginFunc: setLoginFunction,
  };

  //--------------
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
//------------------------------
export default UserProvider;
