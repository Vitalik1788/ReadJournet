import { Suspense } from "react";
import UserNav from "../UserNav/UserNav";
import { Outlet } from "react-router-dom";

const Layout = () => {

  return (<>
    <UserNav />
    <Suspense>
      <Outlet />
    </Suspense>
  </>)
}

export default Layout;