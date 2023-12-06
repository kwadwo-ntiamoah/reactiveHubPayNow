import tw from "tailwind-styled-components";

interface NavMenuProps {
    $active?: boolean
}

export const NavMenuWrapper = tw.div<NavMenuProps>`
${(p) => p.$active ? "border-primary-100" : "border-transparent"}
border-b-2 w-auto h-12 flex items-center justify-center cursor-pointer text-[15px] text-secondary-100
`

export const NavMenu = tw.div`
flex items-center space-x-2 text-secondary-100
`
