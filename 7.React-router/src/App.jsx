import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Contact from "./components/Contact.jsx"
import UserProfile from "./components/UserProfile.jsx"
import NotFound from "./components/NotFound.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:id" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
