import { useState } from "react";
import "./Container.css"

export default function Container() {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <div className={`full-container ${darkmode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
        <p>
          nostrum hinc numquam ei scripserit tacimates causae
          platonem ad oratio vix dictum contentiones hendrerit
          sagittis dissentiunt veniam tibique labores commodo
          detracto viderer inciderint adhuc dolor
        </p>
        <button
          onClick={() => setDarkmode(!darkmode)}
          >Activer le {darkmode ? "Light mode" : "Dark mode"}</button>
    </div>
  )
}
