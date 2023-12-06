import tw from "tailwind-styled-components";

interface CardWrapperProps {
    $backgroundColor?: string
}

export const CardWrapper = tw.div<CardWrapperProps>`
aspect-[3/2] ${(p) => p.$backgroundColor} h-full w-full rounded-md
`

export const CardFlexCol = tw.div`
flex flex-col space-y-4 items-center justify-center h-full
`

export const CardFlexColSm = tw.div`
flex flex-col items-center justify-center
`