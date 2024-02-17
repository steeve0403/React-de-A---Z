import { useState } from "react";

export default function Password({inputsStates, setInputsStates, showValidation }) {
    return (
        <>
            <label htmlFor="password"
                   className="text-slate-50 inline-block mt-5">
                Your password: at least 1 number and 6 characters
            </label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                className="rounded w-full p-1 mt-2"
                value={inputsStates.password}
                onChange={e => setInputsStates({...inputsStates,
                    password: e.target.value})}
            />
            {showValidation.password && (
                <p className="text-red-400 font-semibold">
                    At least 1 number and 6 characters.
                </p>
            )}
        </>
    )
}