import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

import defiplugsIcon from './defiplugs.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={defiplugsIcon} alt="defiplugs-icon" />
        <h2>DEFIPLUGS</h2>
      </div>
      <div className="menu">
        <NavLink exact className="nav-link" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#597e8d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <p>Dashboard</p>
        </NavLink>
        <NavLink className="nav-link" to="/embedded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-code"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#597e8d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
          <p>Embedded Mode</p>
        </NavLink>
        {/* <NavLink className="nav-link" to="/redirect">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-external-link"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#597e8d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
            <line x1="10" y1="14" x2="20" y2="4" />
            <polyline points="15 4 20 4 20 9" />
          </svg>
          <p>Redirect Mode</p>
        </NavLink> */}
      </div>
    </div>
  );
}

export default Sidebar;
