import React from "react"
import tw from "twin.macro"

export default function Item({ children }) {
  return <StyledItem>{children}</StyledItem>
}

const StyledItem = tw.div`text-white text-center w-72 h-72 rounded-3xl shadow-dark bg-zinc-900/80`
