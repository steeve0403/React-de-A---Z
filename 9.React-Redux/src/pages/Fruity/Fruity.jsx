import FruityCart from "./FruityCart.jsx";
import {useSelector} from "react-redux";
import {fruits} from "../../features/fruits.js";


export default function Fruity() {
    const fruitsList = useSelector(state => state.fruits)
    return (
        <>
            <h1 className="text-4xl text-slate-100 font-bold">
                Fruity
            </h1>
            <p className="text-xl text-slate-200 mb-10">
                Pick your fruits and get delivered the next day.
            </p>
            <ul className="flex gap-4 mb-4">
                {fruitsList.list.map(fruits  => (
                    <li
                        key={fruits.id}
                        className="bg-slate-100 p-4 w-full rounded"
                    >
                        <img src={fruits.url} alt={fruits.name} className="w-full h-[250px] object-cover mb-3" />
                        <div className="flex justify-between items-baseline mb-4">
                            <h2 className="text-2xl mb-2 font-semibold">{fruits.name}</h2>
                            <p className="text-lg font-semibold">Per unit : {fruits.price}$</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-full bg-red-600 hover:bg-red-500 text-slate-100 p-1 rounded text-lg">
                                Add one
                            </button>
                            <button className="w-full bg-green-600 hover:bg-green-500 text-slate-100 p-1 rounded text-lg">
                                Remove one
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <FruityCart />
        </>
    )
}