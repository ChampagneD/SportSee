import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/variables.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { getDashboardDataAsync } from "./services/userservice";

const router = createBrowserRouter([
  {
    path: "*",
    loader: async () => redirect("/user"),
  },
  {
    path: "/user",
    element: <App selected={false} />,
  },
  {
    path: "/user/:id",
    element: <App selected={true} />,
    loader: async ({ params }) => {
      const res = await getDashboardDataAsync(params.id);
      if (res.user.data === undefined) return redirect("/user");
      return res;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
