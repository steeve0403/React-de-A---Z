import { useState } from "react";

export default function Confirmation({inputsStates, setInputsStates, showValidation}) {
    return (
        <>
            <label htmlFor="confirmation"
                   className="text-slate-50 inline-block mt-5">
                Confirm your password
            </label>
            <input
                type="password"
                id="confirmation"
                name="password"
                placeholder="Confirm your password"
                className="rounded w-full p-1 mt-2"
                value={inputsStates.passwordConfirmation}
                onChange={e => setInputsStates({...inputsStates,
                    passwordConfirmation: e.target.value})}
            />
            {showValidation.passwordConfirmation && (
                <p className="text-red-400 font-semibold">
                    Passwords are not the same.
                </p>
            )}
        </>
    )
}