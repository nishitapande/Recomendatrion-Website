import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/More/Mainlayout.tsx";
// import Home from "./Pages/Home/Home.tsx";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"/",
          // element:<Home/>
        },
       
    
      ]
    },
    
  
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}