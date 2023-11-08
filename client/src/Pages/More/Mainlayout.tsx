import { Outlet } from "react-router-dom";
// import Navigation from "../../components/Navigation/Navigation";
// import Footer from "../../components/Footer";
const MainLayout = () => {

  return (
    <div className="">
      {/* <Navigation/> */}
      <div className="py-0">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;