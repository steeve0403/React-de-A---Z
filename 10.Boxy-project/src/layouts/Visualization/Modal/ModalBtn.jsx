import { useState } from "react"
import { createPortal } from "react-dom"
import ModalResult from "./ModalResult.jsx"

export default function ModalBtn() {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <button
                onClick={() => setShowModal(!showModal)}
                className="relative z-0 mx-auto mt-2 mb-2 py-1 px-3 text-sm rounded cursor-pointer
                            bg-blue-600 hover:bg-blue-700 text-white"
            >
                    Get the code
            </button>
            {showModal &&
                createPortal(
                    <ModalResult closeModal={() => setShowModal(!showModal)} />,
                    document.body
            )}
        </>
    )
}
