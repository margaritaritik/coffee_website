import React, {useState} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import Main from './Views/Main'
import {useEffect} from "react";
import History from "./Views/History";
import PolzaIVred from "./Views/Polza_i_vred";
import Napitki from "./Views/Napitki";
import Zerna from "./Views/Zerna";
import Statistika from "./Views/Statistika";
import Espresso from "./Views/coffee/espresso/espresso";
import Frappe from "./Views/coffee/frappe/frappe";
import Glyasse from "./Views/coffee/glyasse/glyasse";
import Kappuchino from "./Views/coffee/kappuchino/kappuchino";
import Latte from "./Views/coffee/latte/latte";
import Loader from "./Loader";
import Blog from "./Views/blog";
const Component1 = () => {
    return <h1>foo</h1>;
};

const Component2 = () => {
    useEffect(() => {
        document.title = 'test';
        document.description = 'test tesssssst';
    }, []);
    return <h1>bar</h1>;
};
const Test = () => {
    const routes = useRoutes([
        { path: "/", element: <Main /> },
        { path: "component2", element: <Component2 /> },
        { path: "napitki", element: <Napitki /> },
        { path: "polza-i-vred", element: <PolzaIVred /> },
        { path: "zerna", element: <Zerna /> },
        { path: "statistika", element: <Statistika /> },
        { path: "history", element: <History /> },
        { path: "blog", element: <Blog /> },
        { path: "napitki/latte", element: <Latte /> },
        { path: "napitki/kappuchino", element: <Kappuchino /> },
        { path: "napitki/glyasse", element: <Glyasse /> },
        { path: "napitki/frappe", element: <Frappe /> },
        { path: "napitki/espresso", element: <Espresso/> },

    ]);
    return routes;
};


function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
      <>
          {/*{isLoading && <Loader />}*/}
              <Router>
                  <Test/>
              </Router>
      </>

  );
}

export default App;
