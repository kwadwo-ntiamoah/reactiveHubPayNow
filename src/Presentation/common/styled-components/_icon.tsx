import tw from "tailwind-styled-components"

export const Icon = tw.img`
w-6 h-6
`

export const IconSmall = tw(Icon) `
w-2 h-2
`
export const TableIcon = tw(Icon)`
h-6 w-auto
`
export const NavIcon = tw(Icon)`
w-4 h-4 text-secondary-100"
`
export const CardIcon = tw(Icon)<CardIconProps>`
w-10 h-10 ${(p) => p.$color}
`

interface CardIconProps {
    $color?: string
}