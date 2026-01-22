// import { useContext, useState } from "react";
// import { AdminContext } from "./AdminContext";

// const Admin = () => {
//   const { foods, saveFoods } = useContext(AdminContext);
//   const [name, setName] = useState("");

//   // STEP-3: ADD FOOD
//   const addFood = () => {
//     if (!name) return;

//     const newFood = {
//       _id: Date.now().toString(),
//       name,
//       price: 10,
//       category: "Salad",
//       description: "New item",
//       image: null
//     };

//     saveFoods([...foods, newFood]);
//     setName("");
//   };

//   // ✅ STEP-4: DELETE FOOD (ADD THIS HERE)
//   const deleteFood = (id) => {
//     const updatedFoods = foods.filter(item => item._id !== id);
//     saveFoods(updatedFoods);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Admin Panel</h2>

//       {/* ADD FOOD */}
//       <input
//         type="text"
//         placeholder="Food name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={addFood}>Add Food</button>

//       <hr />

//       {/* FOOD LIST */}
//       <ul>
//         {foods.map(item => (
//           <li key={item._id}>
//             {item.name}
//             <button
//               style={{ marginLeft: "10px", color: "red" }}
//               onClick={() => deleteFood(item._id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Admin;
