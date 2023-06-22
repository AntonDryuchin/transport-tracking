import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <ul>
        <Link to="/list">
          <li>list</li>
        </Link>

        <Link to="/settings">
          <li>Settings</li>
        </Link>
      </ul>
    </div>
  );
}
