import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export const GlobalStyles = createGlobalStyle(() => Theme )

// MEDIA QUERIES - identical to tailwinds, for when you need them in css
export const screen = {
  xs: '500px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
  xxxl: '1750px',
}

export const device = {
  xs: `(min-width: ${screen.xs})`,
  sm: `(min-width: ${screen.sm})`,
  md: `(min-width: ${screen.md})`,
  lg: `(min-width: ${screen.lg})`,
  xl: `(min-width: ${screen.xl})`,
  xxl: `(min-width: ${screen.xxl})`,
  xxxl: `(min-width: ${screen.xxxl})`,
}


const Theme = {
  h1: { ...tw`text-2xl font-bold xl:text-2xl text-white` },
  h2: { ...tw`text-white text-lg font-extrabold xl:text-xl` },
  h3: { ...tw`text-blue-900 text-lg font-bold xl:text-xl` },
  h6: { ...tw`text-white text-base font-bold xl:text-lg` },
  p: { ...tw`text-base text-gray-200` },
}
