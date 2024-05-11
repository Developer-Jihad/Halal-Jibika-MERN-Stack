import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import Favourite from "./../Pages/Favourite/Favourite";
import axios from "axios";
import Applied from "../Pages/Applied/Applied";
import AddJobs from "../Pages/AddJobs/AddJobs";
import Details from "../Pages/Jobs/Details";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: () => {
      return axios.get(`http://localhost:9000/jobs`);
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favorite",
        element: (
          <PrivateRoutes>
            <Favourite />
          </PrivateRoutes>
        ),
      },
      {
        path: "/applied",
        element: (
          <PrivateRoutes>
            <Applied />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addjobs",
        element: (
          <PrivateRoutes>
            <AddJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
