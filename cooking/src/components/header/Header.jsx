import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div>ICON HERE</div>
      </Link>
      <Link to="/admin">
        <div>Admin</div>
      </Link>
      <div>HEADER</div>
    </div>
  );
}
