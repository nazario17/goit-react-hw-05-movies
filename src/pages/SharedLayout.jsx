import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

function SharedLayout() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink className={css.item} activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.item}
                activeClassName="active"
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default SharedLayout;
