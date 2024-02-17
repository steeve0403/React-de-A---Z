import { useState } from "react";

export default function Pseudo({inputsStates, setInputsStates, showValidation}) {
    return (
        <>
            <label htmlFor="username"
                   className="text-slate-50">
                Your nickname (3 - 64 characters)
            </label>
            <input
                placeholder="Your nickname"
                type="text"
                id="username"
                name="username"
                className="rounded w-full p-1 mt-2"
                value={inputsStates.pseudo}
                onChange={e => setInputsStates({...inputsStates,
                pseudo: e.target.value})}
            />
            {showValidation.pseudo && (
                <p className="text-red-400 font-semibold">
                    Your nickname must contain between 3 and 64 characters.
                </p>
            )}
        </>
    )
}