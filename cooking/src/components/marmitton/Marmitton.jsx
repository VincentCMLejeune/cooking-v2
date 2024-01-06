import { useState } from "react";

import "./Marmitton.css";

export default function Marmitton() {
  const [input, setInput] = useState("");

  return (
    <div className="marmitton">
      <div>
        <input type="text" />
      </div>
    </div>
  );
}
