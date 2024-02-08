import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import components
import SignUp from "./components/sign-up/Sign-up";
import Login from "./components/login/Login";
import RootLayout from "./components/root-layout/Root-layout";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import AddBook from "./components/add-book/Add-book";
import SellBook from "./components/sell-book/Sell-book";
import AllBooks from "./components/all-books/AllBooks";
import DetailedView from "./components/detailed-view/Detailed-view";
import Recommended from "./components/recommended/Recommended";
import Books from "./components/books/Books";
import SearchedBooks from "./components/searched-books/Searched-books";
import Cart from "./components/cart/Cart";
import PaymentSuccess from "./components/payment-success/Payment-success";
import Address from "./components/address/Address";
import Orders from "./components/orders/Orders";
import Profile from "./components/profile/Profile";
import BuyBook from "./components/buy-book/Buy-book";
function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/login", element: <Login /> },
        { path: "/sign-up", element: <SignUp /> },
        {path:"/profile",element:<Profile/>},
        {
          path: "/user",
          element: <User />,
          children: [
            { path: "", element: <Books /> },
            { path: "books", element: <Books /> },
            {
              path: "detailed-view",
              element: <DetailedView />,
            },
            { path: "sell-book", element: <SellBook /> },
            { path: "searched-book", element: <SearchedBooks /> },
            { path: "cart", element: <Cart /> },
            {path:"payment-success",element:<PaymentSuccess/>},
            {path:"address",element:<Address/>},
            {path:"orders",element:<Orders/>}
          ],
        },
        
        {
          path: "/admin",
          element: <Admin />,
          children: [
            { path: "", element: <Books /> },
            { path: "books", element: <Books /> },
            {
              path: "detailed-view",
              element: <DetailedView />,
            },
            { path: "add-book", element: <AddBook /> },
            { path: "searched-book", element: <SearchedBooks /> },
            { path: "cart", element: <Cart /> },
            { path: "buy-book", element: <BuyBook /> },
          
          ],
        },
      ],
    },
    // {
    //   path: "/",
    //   element: <RootLayout />,
    //   children: [
    //     {
    //       path: "/login",
    //       element: <Login />,
    //     },
    //     {
    //       path: "/",
    //       element: <Login />,
    //     },
    //     {
    //       path: "/sign-up",
    //       element: <SignUp />,
    //     },
    //     {
    //       path: "/user",
    //       element: <User />,
    //       children: [
    //         { path: "sell-book", element: <SellBook /> },
    //         {
    //           path: "all-books",
    //           element: <AllBooks />,
    //         },
    //         {
    //           path: "recomend",
    //           element: <Recommended />,
    //         },
    //       ],
    //     },
    //     {
    //       path: "/admin",
    //       element: <Admin />,
    //       children: [
    //         {
    //           path: "all-books",
    //           element: <AllBooks />,
    //         },
    //       ],
    //     },
    //     {
    //       path: "/recomend",
    //       element: <Recommended />,
    //     },
    //     { path: "/add-book", element: <AddBook /> },
    //     { path: "/sell-book", element: <SellBook /> },
    //     { path: "/detailed-view", element: <DetailedView /> },
    //   ],
    // },
  ]);
  return (
    <div className="App">
      <RouterProvider router={browserRouterObj} />
    </div>
  );
}

export default App;
