import { useState } from "react"
import tw from "twin.macro"
import { PageWrapper } from "../components/PageWrapper.styled"
import Item from "../features/Shop/Item"

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
    <PageWrapper>
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
            <Item key={name}>{name}</Item>
          ))}
        </ItemCollection>
      </ShopWrapper>
    </PageWrapper>
  )
}

const ShopWrapper = tw.div`flex flex-col gap-12`

const SearchWrapper = tw.div`flex justify-center items-center gap-4 px-8 rounded-3xl h-28 bg-zinc-900/80`
const SearchBar = tw.input`px-4 w-full max-w-2xl h-12 bg-zinc-800/50 border-2 border-zinc-700 rounded-2xl shadow-dark text-white`
const SearchButton = tw.button`px-4 h-11 bg-red-500 shadow-red-glow rounded-3xl text-white`

const ItemCollection = tw.div`flex flex-wrap gap-10 justify-center`
