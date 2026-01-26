import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // import styles

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={2000} // 2 seconds
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
