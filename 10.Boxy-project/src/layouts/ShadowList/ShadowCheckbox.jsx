import { useDispatch, useSelector } from 'react-redux'
import { updateCheckbox } from "../../features/shadows"

export default function ShadowCheckbox({name, shadowID}) {
    const checkboxShadow = useSelector(state => state.shadows.find(shadow => shadow.id === shadowID))
    const dispatch = useDispatch()


    return (
        <div className="flex items-center">
            <input
                onChange={() => dispatch(updateCheckbox({shadowID, name}))}
                type="checkbox"
                checked={checkboxShadow[name]}
                id={`checkbox-${shadowID}-${name}`}
                className="h-4 w-4 border-gray-300 rounded mr-2"
            />
            <label
                className="leading-4 mr-5"
                htmlFor={`checkbox-${shadowID}-${name}`}
            >
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        </div>
    )
}
