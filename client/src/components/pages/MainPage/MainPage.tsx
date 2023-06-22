import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h2>MainPage</h2>
      <Link to="/list">List</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
}
