import PropTypes from "prop-types";
import Header from "./Header";
import News from "./News";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Router>
        <Header />
        <div className="container" style={{ width: "100%" }}>
          <Switch>
            <Route exact path="/">
              <News />
            </Route>
            <Route exact path="/business">
              <News category="business" />
            </Route>
            <Route path="/science">
              <News category="science" />
            </Route>
            <Route path="/technology">
              <News category="technology" />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/entertainment">
              <News category="entertainment" />
            </Route>
            <Route path="/sports">
              <News category="sports" />
            </Route>
          </Switch>
        </div>
      </Router>

      {/* from this page i will pass news categories ,pages,and some other props */}
    </div>
  );
}

Home.propTypes = {};

export default Home;
