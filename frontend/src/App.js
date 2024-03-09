// import "./App.css";

// const App = () => <h1 className="App">Hello World</h1>;

// export default App;

//import React, { useEffect } from "react";
import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { login } from "./actions/userActions";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";

const App = () => {
  //const dispatch = useDispatch();

  //const userLogin = useSelector((state) => state.userLogin);
  //const { loading, error, userInfo } = userLogin;

  // const history = useHistory();
  // useEffect(() => {
  //   if (userInfo) {
  //     //console.log("userInfo", userInfo);
  //     ///console.log("error", error);
  //     //console.log("loading", loading);
  //   }
  // }, [userInfo]);

  // const handleClick = () => {
  //   console.log("loading", loading);
  //   dispatch(login("dharma@gmail.com", "12356"));
  // };

  return (
    <div>
      <Header />

      <LandingPage />

      <Footer />
      {/* <h1 className="App">Hello World</h1>
      <button onClick={handleClick}>Login User</button> */}
    </div>
  );
};

export default App;
