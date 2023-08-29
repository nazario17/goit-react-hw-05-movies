import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </div>
  );
}

export default SharedLayout;
