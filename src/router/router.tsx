import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import App from "../App";
import { Home } from "../pages/Home";

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
