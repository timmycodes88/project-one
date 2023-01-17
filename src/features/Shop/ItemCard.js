import React from "react"
import tw from "twin.macro"


// make a point about descriptive names here, put 'card' in the name bc thats what they are
export default function ItemCard({ children }) {
  return (
    <StyledItem>
      <p>{children}</p>
    </StyledItem>)
}

const StyledItem = tw.div`text-center p-12 rounded-3xl bg-zinc-800 hover:scale-102 hover:cursor-pointer transition-all duration-200 ease-in-out aspect-square`
