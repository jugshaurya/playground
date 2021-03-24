import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Helmet } from "react-helmet";

import HomePage from "../../pages/home";
import ExplorePage from "../../pages/explore";

import Footer from "../../components/Footer";
import Content from "../../content";
import playgroundComponents from "../../shared/playgroundComponents";

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        {playgroundComponents.map((elm, idx) => {
          return (
            <Route key={idx} path={elm.path} exact>
              <Helmet>
                <title>
                  {elm.name} | Playground 🚀 - React Native Elements
                </title>
              </Helmet>
              {elm.ContentMDX && (
                <Content
                  ContentPlayground={elm.ContentPlayground}
                  ContentMDX={elm.ContentMDX}
                />
              )}
              {elm.component && <elm.component />}
            </Route>
          );
        })}
        <Route exact path="/explore">
          <Helmet>
            <title>
              Explore | Playground{" "}
              <span role="img" aria-label="playground">
                🚀
              </span>{" "}
              - React Native Elements
            </title>
          </Helmet>
          <ExplorePage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}
