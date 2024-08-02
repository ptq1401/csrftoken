import classes from "./Signup.module.css";
import { useRef, useState } from "react";
import useCsurf from "../../../Hooks/useCsurf";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//-------------
function Signup() {
  //--hooks--
  const [pass, setPass] = useState(true);
  const navigate = useNavigate();
  const form = useRef();
  // const PostCsurf = useCsurf();
  //---function--
  const createHandle = async (e) => {
    e.preventDefault(e);
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    // try {
    //   const result = await PostCsurf("/test", data);
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    //   navigate("/error");
    // }
  };
  //-----------

  return (
    <div className={classes.container}>
      <form ref={form} className={classes.form}>
        <h3>Sign Up</h3>
        <div className={classes.input}>
          <input placeholder="Your Name" name="name" type="text"></input>
          <i class="fa-solid fa-user"></i>
        </div>
        <div className={classes.input}>
          <input placeholder="Email" name="email" type="text"></input>
          <i class="fa-solid fa-envelope"></i>
        </div>
        <div className={classes.input}>
          <input placeholder="Password" type="password" name="password"></input>
          <i class="fa-solid fa-lock"></i>
        </div>
        <div className={classes.input}>
          <input
            placeholder="Confirm Password"
            type={pass ? "password" : "text"}
            name="confirmPassword"
          ></input>
          <button
            type="button"
            onClick={() => {
              setPass((prev) => !prev);
            }}
          >
            <i class="fa-solid fa-eye"></i>
          </button>
        </div>

        {/* {error.error && <h3>{error.message}</h3>} */}
        <button type="submit" onClick={(event) => createHandle(event)}>
          Create Account
        </button>
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
//----------------
export default Signup;
