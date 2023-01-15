import tw, { styled, css } from "twin.macro"
import { NavLink } from "react-router-dom"
import { ReactComponent as Gem } from "../assets/gem.svg"

export default function Navbar() {
  return (
    <Container>
      <LogoPositioner>
        <GemLogo />
        <LogoText>Team 8</LogoText>
      </LogoPositioner>
      <Links>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
      </Links>
    </Container>
  )
}

//This is not really a wrapper its the main container (so I want to ask David what he would call this styled component)
const Container = tw.div`sticky top-0 flex justify-around items-center h-28 bg-zinc-900 shadow-big-dark`

const LogoPositioner = tw.div`flex gap-4 items-center`
const GemLogo = tw(Gem)`w-14 h-14 fill-red-500 `
const LogoText = tw.h1`text-6xl text-red-500
[text-shadow: 0px 0px 12px rgba(251,11,11,0.6)]
`

const Links = tw.span`flex gap-10`
//Concept of Styling an already custom component below
const StyledLink = styled(NavLink)(() => [
  tw`text-red-500 text-xl
    [text-shadow: 0px 0px 12px rgba(251,11,11,0.6)]`,
  css`
    &.active {
      text-decoration: underline;
    }
  `,
])
