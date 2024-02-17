import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
