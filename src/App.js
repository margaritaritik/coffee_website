import React, {useState} from "react";
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
        { path: "napitki/latte", element: <History /> },
        { path: "napitki/kappuchino", element: <History /> },
        { path: "napitki/glyasse", element: <History /> },
        { path: "napitki/frappe", element: <History /> },
        { path: "napitki/espresso", element: <History /> },

    ]);
    return routes;
};


function App() {
    function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
        return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        someRequest().then(() => {
            const loaderElement = document.querySelector(".loader-container");
            if (loaderElement) {
                loaderElement.remove();
                setLoading(!isLoading);
            }
        });
    });
  return (
      <>
              <Router>
                  <Test/>
              </Router>
      </>

  );
}

export default App;
