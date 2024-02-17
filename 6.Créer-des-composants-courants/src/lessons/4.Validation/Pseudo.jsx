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
        </>
    )
}