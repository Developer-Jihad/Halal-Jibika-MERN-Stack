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
import UpdateJob from "../Pages/UpdateJob/UpdateJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: async () => {
      const primaryUrl = "https://server-halal-jibika.vercel.app/jobs";
      const backupUrl = "/jobs.json"; // Assuming jobs.json is in the public directory

      try {
        const response = await axios.get(primaryUrl);
        if (!response.data) {
          throw new Error("No data returned from the primary server.");
        }
        return response.data;
      } catch (primaryError) {
        console.error("Error fetching jobs from primary URL:", primaryError);
        try {
          const backupResponse = await axios.get(backupUrl);
          if (!backupResponse.data) {
            throw new Error("No data returned from the backup source.");
          }
          return backupResponse.data;
        } catch (backupError) {
          console.error("Error fetching jobs from backup URL:", backupError);
          throw new Error(
            "Failed to fetch jobs from both sources. Please try again later."
          );
        }
      } finally {
        // Code here will always run, regardless of success or error
        console.log("Request completed.");
      }
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
        element: <Favourite />,
      },
      {
        path: "/applied",
        element: <Applied />,
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
        path: "/updatejob/:id",
        element: <UpdateJob></UpdateJob>,
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
