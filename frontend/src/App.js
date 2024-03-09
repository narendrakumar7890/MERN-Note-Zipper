// import "./App.css";

// const App = () => <h1 className="App">Hello World</h1>;

// export default App;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      console.log("userInfo", userInfo);
      console.log("error", error);
      console.log("loading", loading);
    }
  }, [userInfo]);

  const handleClick = () => {
    console.log("loading", loading);
    dispatch(login("dharma@gmail.com", "12356"));
  };

  return (
    <div>
      <h1 className="App">Hello World</h1>
      <button onClick={handleClick}>Login User</button>
    </div>
  );
};

export default App;
