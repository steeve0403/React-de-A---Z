import { useDispatch } from "react-redux"
import { updateBoxValue } from "../../features/boxProperties"

export default function BoxColorPicker({inputData}) {
    const dispatch = useDispatch()

    function handleInputs(e) {
        dispatch(updateBoxValue({
            inputNumber: inputData.inputNumber,
            value: e.target.value
        }))
    }
    return (
        <div className="mt-3">
            <p>{inputData.name}</p>
            <div className="flex mt-2">
                <input
                    value={inputData.value}
                    onChange={handleInputs}
                    type="text"
                    className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
                />
                <input
                    value={inputData.value}
                    onChange={handleInputs}
                    type="color"
                    className="cursor-pointer h-[40px]"
                />
            </div>
        </div>
            )
}
