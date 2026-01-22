// import { createContext, useState } from "react";
// import { food_list, menu_list } from "../assets/assets";

// export const AdminContext = createContext();

// const AdminProvider = ({ children }) => {
//   const [foods, setFoods] = useState(
//     JSON.parse(localStorage.getItem("foods")) || food_list
//   );

//   const [menus, setMenus] = useState(
//     JSON.parse(localStorage.getItem("menus")) || menu_list
//   );

//   const saveFoods = (data) => {
//     setFoods(data);
//     localStorage.setItem("foods", JSON.stringify(data));
//   };

//   const saveMenus = (data) => {
//     setMenus(data);
//     localStorage.setItem("menus", JSON.stringify(data));
//   };

//   return (
//     <AdminContext.Provider value={{ foods, menus, saveFoods, saveMenus }}>
//       {children}
//     </AdminContext.Provider>
//   );
// };

// export default AdminProvider;
