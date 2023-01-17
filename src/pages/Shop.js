import { useState } from "react"
import tw from "twin.macro"
import { Wrapper } from "../components/Wrapper.styled"
import ItemCard from "../features/Shop/ItemCard"
import { Section } from '../components/Section.styled'

const names = [
  "Tim",
  "Timothy",
  "Tommy",
  "Thresea",
  "Terrance",
  "Bill",
  "Billy",
  "Bob",
  "Bobby",
  "Patrick",
  "Will",
  "Willy",
  "Travis",
  "Sid",
]

export default function Shop() {
  const [query, setQuery] = useState("")

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const filteredNames = names
    .sort()
    .filter(name => name.toLowerCase().includes(query.toLowerCase()))

  return (
    <Section>
      <Wrapper>
        <ShopWrapper>
          <SearchWrapper>
            <SearchBar
              placeholder="Search Shop"
              value={query}
              onChange={handleChange}
            />
            <SearchButton>Search</SearchButton>
          </SearchWrapper>
          <ItemCollection>
            {filteredNames.map(name => (
              <ItemCard key={name}>{name}</ItemCard>
            ))}
          </ItemCollection>
        </ShopWrapper>
      </Wrapper>
    </Section>
  )
}

const ShopWrapper = tw.div`flex flex-col gap-12`

const SearchWrapper = tw.div`flex justify-center items-center gap-4 px-8 rounded-3xl h-28 bg-zinc-900/80`
const SearchBar = tw.input`px-4 w-full max-w-2xl h-12 bg-zinc-800/50 border-2 border-zinc-700 rounded-2xl text-white`
const SearchButton = tw.button`px-4 h-11 bg-red-500 rounded-3xl text-white`

const ItemCollection = tw.div`grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-8 xl:grid-cols-5 xl:gap-10 3xl:grid-cols-6`
