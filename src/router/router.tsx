import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact";

import { Home } from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path : "about/",
                element : <About />
            },
            {
                path : "contact/",
                element : <Contact />
            },
            
        ]
    }
])