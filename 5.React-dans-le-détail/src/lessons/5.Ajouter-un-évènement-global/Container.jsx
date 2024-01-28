import React,{ useState }  from "react";
import HugeContent from "./HugeContent.jsx";

export default function Container() {
    const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <h1>Ajouter un évènement global</h1>
        <button onClick={() => setShowContent(!showContent)}>
            {showContent ? "Hide Content" : "Show Content"}
        </button>
        {showContent && <HugeContent />}
    </div>
  )
}
