import classes from "./Home.module.css";

//-------------------------------------------------------
function Home() {
  return (
    <div>
      <h1>ABC</h1>

      <h1>ABC</h1>
      <h1>ABC</h1>
      <h1 className={[classes.line, classes.yellow].join(" ")}>ABC</h1>
    </div>
  );
}

export default Home;
