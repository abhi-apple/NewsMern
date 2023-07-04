import PropTypes from "prop-types";
// import Header from "./Header";
import News from "./News";
import About from "./About";
import SignUp from "./Signup";
import Login from "./Login";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./DashBoard";
import { useState } from "react";

function Home(props) {

  let [searchValue, setSearchValue] = useState("");
  function updateSearchVal(val){
    setSearchValue(val);
    console.log(searchValue)
  }

  return (
    <div>
      <Router>
        <NavBar updateSearchVal = {updateSearchVal}/>
        <div className="container" style={{ width: "100%" }}>
          <Routes>
            <Route exact path="/" element={<News />}></Route>
            <Route path={`/:category`} element={<News />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
      {/* from this page i will pass news categories ,pages,and some other props */}
    </div>
  );
}

Home.propTypes = {};

export default Home;
