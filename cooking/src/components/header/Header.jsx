import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div>ICON HERE</div>
      </Link>
      <div>HEADER</div>
    </div>
  );
}
