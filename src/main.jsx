import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import DarkModeContextProvider from "./context/DarkMode";
import { TotalPriceProvider } from "./context/TotalPriceContext";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/error";
import ProductPage from "./pages/products";
import ProfilePage from "./pages/profile";
import ProductDetailPage from "./pages/productDetail";

import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
