import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import NotFound from "./NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Route>

      <Route path="/resume">
        <Resume />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
