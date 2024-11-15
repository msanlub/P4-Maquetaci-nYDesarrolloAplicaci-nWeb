import { Outlet } from "react-router-dom";
//import Navbar from "../components/Navbar";

const layoutPublic = () => {
  return (
    <div>
        <h1>LayoutPublic</h1>
        {/* <Navbar /> */}
          {/* <main>Main</main> */}
        <Outlet />
        <footer>Footer</footer>
    </div>
  )
}

export default layoutPublic