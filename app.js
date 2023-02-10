import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import { Body } from "./src/component/Body";
import { BodyContent } from "./src/component/RestaurentCard";
import { Header } from "./src/component/Header";
import { Footer } from "./src/component/Footer";
import Shimmer from "./src/component/Shimmer";
import Error from "./src/component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import RestaurentMenu from "./src/component/RestaurentMenu";
import Profile from "./src/component/Profile";
import { Provider } from "react-redux";
import store from "./src/utils/store"
import Cart from "./src/component/Cart";
// import InstaMart from "./src/component/InstaMart";

const InstaMart = lazy(() => import("./src/component/InstaMart"))

const AppLayout = () => {
  return (
    <>
    <Provider store={store}>
      <Header />
      {/* <SearchBar/> */}
      <Outlet />
      <Footer />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      // {
      //   path: "/Home",
      //   element: <Body />,
      // },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/RestaurentMenu/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/Instamart",
        element: <Suspense fallback={<Shimmer/>}><InstaMart/></Suspense>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
