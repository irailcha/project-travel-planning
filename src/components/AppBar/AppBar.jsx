import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AppBar=()=>{
  return (
    <div className='body-style'>
    <header>
      <ul>
      <li>
        <NavLink to="/" end>Home</NavLink>
      </li>
      <li>
        <NavLink to="/explore">Explore</NavLink>
      </li>
      <li>
        <NavLink to="/map">Map</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/photos">Photos</NavLink>
      </li>

      </ul>
    </header>

  <Suspense fallback={<p>Loading...</p>}>
    <Outlet/>
  </Suspense>
  </div>
  );
}

export default AppBar;