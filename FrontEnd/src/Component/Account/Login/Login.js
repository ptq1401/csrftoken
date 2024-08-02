import classes from "./Login.module.css";
import { useRef } from "react";
import useCsurf from "../../../Hooks/useCsurf";
import { useNavigate } from "react-router-dom";

//-------------
function Login() {
  //--hooks--
  const navigate = useNavigate();
  const form = useRef();
  const PostCsurf = useCsurf();
  //---function--
  const loginHandle = async (e) => {
    e.preventDefault(e);
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const result = await PostCsurf("/test", data);
      console.log(result);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };
  //-----------

  return (
    <>
      <div className={classes.modal}>
        <h3 className={classes.title}>Login</h3>
        <form ref={form}>
          <input placeholder="Email" name="email"></input>
          <input placeholder="Password" type="password" name="password"></input>
          {/* {error.error && <h3>{error.message}</h3>} */}
          <button type="submit" onClick={(event) => loginHandle(event)}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
//----------------
export default Login;
