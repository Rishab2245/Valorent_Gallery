// ## Namaste React Course by Akshay Saini
// Chapter 09 - Optimizing our App

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/ProfileClass";
import AddCard from "./Components/AddCard";
import Error from "./Components/Error";
import Admin from "./Components/Admin";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing

// AppLayout  component to render: Header, Outlet(it contain children component like body, About) and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "EYC",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            // nested routing
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: <Admin />,
    errorElement: <Error />, // show error component for path is different
    children: [{
      path: "Home",
      element:<Home />,
    },
    {
      path: "EYC",
      element:<Body />,
    }]
  },
  {
    path: "AddCard",
    element: <AddCard />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
