import PropTypes from "prop-types";
import Header from "./Header";
import News from "./News";
import About from "./About";
import SignUp from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Router>
        <Header />
        <div className="container" style={{ width: "100%" }}>
          <Routes>
            <Route exact path="/" element={<News />}></Route>
            <Route
              exact
              path="/business"
              element={<News category="business" />}
            ></Route>
            <Route
              path="/science"
              element={<News category="science" />}
            ></Route>
            <Route
              path="/technology"
              element={<News category="technology" />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/entertainment"
              element={<News category="entertainment" />}
            ></Route>
            <Route path="/sports" element={<News category="sports" />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Router>
      {/* from this page i will pass news categories ,pages,and some other props */}
    </div>
  );
}

Home.propTypes = {};

export default Home;
