import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "./adminPageComponents/AdminSidebar";
import AdminDashboard from "./adminSubPages/AdminDashboard";

const AdminPage = () => {
  const location = useLocation().pathname;
  return (
    <>
      <div className="drawer drawer-mobile border-t-1 border-accent">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">
          {/* mobile sidebar menu open */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Admin Dashboard
            </h2>
            <label htmlFor="my-drawer-2" className="lg:hidden">
              <svg
                className="swap-off"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>
          </div>
          {/* mobile sidebar open menu end*/}

          {/* <!-- Page content here --> */}
          <Outlet />
          {/* {(location === '/dashboard' || location === '/dashboard/') && (
            <AdminDashboard />
          )} */}
        </div>
        <div className="drawer-side h-screen">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <AdminSidebar />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
