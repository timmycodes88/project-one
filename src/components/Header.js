import tw, { styled, css } from "twin.macro"
import { NavLink } from "react-router-dom"
import { ReactComponent as Gem } from "../assets/gem.svg"
import { WrapperStyles } from './Wrapper.styled'
import Logo from '../assets/team_8_logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <StyledHeader>
      <CustomWrapper>

      
      <Link to="/">
        <StyledLogo src={Logo} />
      </Link>

      <Links>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
      </Links>
      </CustomWrapper>
    </StyledHeader>
  )
}


const StyledHeader = styled.div`
  ${tw`sticky flex justify-center top-0 z-10 3xl:px-[var(--spacing)]`}
  ${WrapperStyles}
`

const CustomWrapper = tw.div`flex justify-between items-center w-full bg-zinc-900/50 backdrop-blur border-zinc-800 border-b shadow-sm py-8 px-[var(--spacing)] 3xl:px-0`




const StyledLogo = tw.img`h-14 w-auto xl:h-16`


const Links = tw.span`flex gap-10`
//Concept of Styling an already custom component below
const StyledLink = styled(NavLink)(() => [
  tw`text-white text-base font-medium
    [text-shadow: 0px 0px 12px rgba(251,11,11,0.6)]`,
  css`
    &.active {
      text-decoration: red underline 2px;
    }
  `,
])
