import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
        <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Sidebar</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-xl">
      {/* Sidebar content here */}
      <li> <Link to='/'>Contact</Link> </li>
      <li><Link to='/charts-maps'>Charts and Maps</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Main;