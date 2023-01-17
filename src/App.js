import { BrowserRouter, Route, Routes } from "react-router-dom"
import tw from "twin.macro"
import Header from "./components/Header"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import { GlobalStyles } from './utils/globalStyles'

export default function App() {
  return ( 
    <>
    <GlobalStyles />
    <BrowserRouter>
      
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
    </>

  )
}

const AppWrapper = tw.div`min-h-screen bg-zinc-900`
