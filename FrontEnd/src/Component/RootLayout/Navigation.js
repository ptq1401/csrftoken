import classes from "./Navigation.module.css";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
//--------------------------------------------------------

function Navigation() {
  //---hook---
  const [show, setShowListOption] = useState(false);
  const [navigation, setNavigation] = useState(false);
  const showOption = () => {
    setShowListOption((prev) => !prev);
  };
  //----------

  return (
    <>
      <button
        className={classes.show_sidebar}
        onClick={() => {
          setNavigation((prev) => !prev);
        }}
      >
        <i class="fa-solid fa-angles-down"></i>
      </button>
      <div
        className={[
          classes.sidebar,
          classes[`${navigation ? "show" : "hidden"}`],
        ].join(" ")}
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <i class="fa-solid fa-book-quran"> Diary</i>
        </NavLink>
        <div className={classes[`button-option`]}>
          <button onClick={showOption}>Option</button>
          {show && (
            <ul className={classes.option} onClick={showOption}>
              <li>
                <Link to="/user/login"> Login</Link>
              </li>
            </ul>
          )}
          <NavLink
            to="/user"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <i class="fa-solid fa-id-badge"> Account</i>
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
//--------------------------------------------------------
export default Navigation;
