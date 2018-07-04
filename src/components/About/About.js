import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>

        <div className="box" />
        <Switch>
          <Route path="/about/history" component={History} />
          <Route path="/about/contact" component={Contact} />
          <Route
            path="/about"
            render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  faucibus libero sed nisl tempus hendrerit. Vivamus gravida
                  dolor nec nisl consequat sagittis. Donec eu odio ultrices,
                  lobortis dui id, cursus tellus. Mauris vitae urna volutpat,
                  sodales velit eu, facilisis massa. Suspendisse quis fringilla
                  nisl. Vestibulum lacinia bibendum mi eu posuere. Etiam
                  accumsan, odio sit amet dignissim viverra, magna velit
                  hendrerit dui, a condimentum ligula lorem tristique quam.
                  Vivamus dapibus pharetra nunc, quis lacinia massa porta ut.
                  Morbi sed eros magna. Vivamus sed elit nisl. Nulla iaculis,
                  nisi mollis convallis mattis, dui nisi volutpat dolor, ac
                  accumsan sem lectus nec est. Suspendisse vel est sit amet
                  risus eleifend convallis et ut ipsum. Duis venenatis neque et
                  porttitor tempus. Integer accumsan imperdiet enim ultricies
                  eleifend. Pellentesque congue volutpat convallis. Donec mauris
                  augue, mollis a varius in, faucibus fermentum massa.
                </p>
              </div>
            )}
          />
        </Switch>
      </div>
      // </div>
    );
  }
}
