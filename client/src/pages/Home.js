import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { Wrapper } from "../components/Wrapper.styled"
import { Section } from "../components/Section.styled"

export default function Home() {
  const [apiText, setApiText] = useState("")
  //! WIP
  useEffect(() => {
    let cancel = false

    fetch("https://127.0.0.1:8080/").then(res => console.log(res))

    return () => {
      cancel = true
    }
  }, [])

  return (
    <Section>
      <Wrapper>
        <Article>
          <h1>Hello World</h1>
          <p>{apiText}</p>
        </Article>
      </Wrapper>
    </Section>
  )
}

const Article = tw.main`flex flex-col pt-12 gap-4`
