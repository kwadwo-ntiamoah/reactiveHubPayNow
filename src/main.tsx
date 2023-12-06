import "reflect-metadata";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "./Core/router";
import ServiceLocator from "./Core/serviceLocator";
import { store } from "./Presentation/store";

import "./Presentation/index.css";
import 'react-loading-skeleton/dist/skeleton.css'

// register container
ServiceLocator.init()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);
