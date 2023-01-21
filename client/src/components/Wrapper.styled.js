import tw, { styled } from 'twin.macro'

//! imported wrapper from student

// * this is where the amount of padding, or breakpoints where it adjusts can be changed. this is separate so these values can be exported into other files that need to use this value in custom ways (eg. HorizontalSlider.js)
export const WrapperStyles = tw`[--spacing: 1.5rem;] xs:[--spacing: 3rem;] lg:[--spacing: 5rem;] 3xl:mx-auto 3xl:max-w-9xl`

// import this normally (any time you can use the normal wrapper)
export const Wrapper = styled.div`
  ${WrapperStyles}
  ${tw`relative w-full h-fit px-[var(--spacing)] animate-fade-in`}
`
