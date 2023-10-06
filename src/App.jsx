import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  let [darkmode, setDarkmode] = useState(false);

  return (
    <div className={"app " + (darkmode && "dark")}>
      <div className="dark:bg-black">
        <Outlet context={[darkmode, setDarkmode]} />
      </div>
    </div>
  );
}

export default App;
