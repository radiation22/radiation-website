import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Main from "./Main";
import Login from "../components/Login/Login";
import StartPage from "../components/StartPage/Startpage";
import All from "../components/Home/All";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    // errorElement: <Notfound></Notfound>,
    children: [
      {
        path: "/",
        element: <StartPage></StartPage>,
      },

      {
        path: "/all",
        element: <All></All>,
      },
    ],
  },
]);
