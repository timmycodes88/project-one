import tw from "twin.macro"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </Container>
  )
}

//This is not really a wrapper its the main container (so I want to ask David what he would call this styled component)
const Container = tw.div`h-20 bg-white dark:bg-gray-800`
