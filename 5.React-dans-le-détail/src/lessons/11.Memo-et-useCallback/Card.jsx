import { memo } from "react";

export default memo (function Card({txt}, customLog) {
    console.log("RENDER CARD")
    customLog()
    return (
        <div>
            <p>Card</p>
            <p>{txt}</p>
        </div>
    )
})