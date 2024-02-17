import React, {useState,} from "react";
import Pseudo from "./Pseudo.jsx";
import Password from "./Password.jsx";
import Confirmation from "./Confirmation.jsx";

export default function Validation() {
    const [inputStates, setInputStates] = useState({
        pseudo: "",
        password: "",
        passwordConfirmation: ""
    })
    const [showValidation, setShowValidation] = useState({
        pseudo: false,
        password: false,
        passwordConfirmation: false
    })

    function handleSubmit(e) {
        e.preventDefault()

        if (validationCheck()) {
            console.log("Sending form")
        }
    }

    function validationCheck() {
        const areValid = {
            pseudo: false,
            password: false,
            passwordConfirmation: false
        }
        if (inputStates.pseudo.length  < 3 || inputStates.pseudo.length > 64) {
            setShowValidation(state => ({...state, pseudo: true}))
        } else {
            areValid.pseudo = true
            setShowValidation(state => ({...state, pseudo: false}))
        }

        if (inputStates.password.length < 6 || !/\d/.test(inputStates.password)) {
            setShowValidation(state => ({...state, password: true}))
        } else {
            areValid.password = true
            setShowValidation(state => ({...state, password: false}))
        }

        if (inputStates.passwordConfirmation !== inputStates.password) {
            setShowValidation(state => ({...state, passwordConfirmation: true}))
        } else {
            areValid.passwordConfirmation = true
            setShowValidation(state => ({...state, passwordConfirmation: false}))
        }
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto border p-10 rounded"
        >

            <p className="text-slate-100 text-xl mb-6">
                Create your username and password
            </p>
            <Pseudo
                inputsStates={inputStates}
                setInputsStates={setInputStates}
                showValidation={showValidation}
            />
            <Password
                inputsStates={inputStates}
                setInputsStates={setInputStates}
                showValidation={showValidation}

            />
            <Confirmation
                inputsStates={inputStates}
                setInputsStates={setInputStates}
                showValidation={showValidation}

            />
            <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">
                Validate
            </button>
        </form>
    )
}