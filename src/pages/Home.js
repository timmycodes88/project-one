import React from "react"
import tw from "twin.macro"
import { PageWrapper } from "../components/PageWrapper.styled"

export default function Home() {
  return (
    <PageWrapper>
      <Article>
        <Header>Hello World</Header>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
          sint commodi repudiandae consequuntur voluptatum laborum numquam
          blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.
          Veritatis obcaecati tenetur iure eius earum ut molestias architecto
          voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
          sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
          quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga?
          Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi
          expedita sint?
        </p>
      </Article>
    </PageWrapper>
  )
}

const Article = tw.main`text-white flex flex-col gap-4`
const Header = tw.h1`text-5xl`
