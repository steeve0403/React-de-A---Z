import Child from "./Child.jsx";
export default function Container() {
  return (
    <div>
      <h1>Props children</h1>
        <Child>
            <h1>Lorem ipsum </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quia.
            </p>
        </Child>
        <Child>
            <button>Click me</button>
        </Child>
        <Child>
            <input type="text"/>
        </Child>
    </div>
  )
}
