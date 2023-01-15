import { BrowserRouter, Route, Routes } from "react-router-dom"
import tw from "twin.macro"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  )
}

const AppWrapper = tw.div`min-h-screen bg-zinc-800`
