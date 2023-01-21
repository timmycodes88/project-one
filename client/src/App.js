import { Outlet } from "react-router-dom"
import tw from "twin.macro"
import Header from "./components/Header"
import { GlobalStyles } from "./utils/globalStyles"

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <Outlet />
      </AppWrapper>
    </>
  )
}

const AppWrapper = tw.div`min-h-screen bg-zinc-900`
