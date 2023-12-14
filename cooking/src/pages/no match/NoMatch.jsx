import { Link } from "react-router-dom";

import "./NoMatch.css";

export default function NoMatch() {
  return (
    <div className="no-match">
      <div>You look lost</div>
      <Link to="/">
        <div>Go back</div>
      </Link>
    </div>
  );
}
