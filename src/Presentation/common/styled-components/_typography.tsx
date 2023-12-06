import tw from "tailwind-styled-components"

type Typographysize = "title" | "subtitle" | "small" | "extrasmall"
export type TypoGraphyColor = "primary" | "secondary" | "danger" | "white"

interface TypographyProps {
    $size?: Typographysize
    $color?: TypoGraphyColor
    $bold?: boolean
}

export const Typography = tw.p<TypographyProps>`
${(p) => p.$size == "title" && "text-2xl md:text-5xl font-bold"}
${(p) => p.$size == "subtitle" && "md:text-2xl font-semibold"}
${(p) => p.$size == "small" && "text-xs md:text-sm"}
${(p) => p.$size == "extrasmall" && "text-xs"}
${(p) => p.$bold ? "font-bold" : "font-base" }
${(p) => p.$color == "primary" 
            ? "text-primary-100" 
            : p.$color == "secondary"
                ? "text-secondary-100"
                : p.$color == "danger"
                    ? "text-danger-100"
                    : p.$color == "white"
                        ? "text-white"
                        : "text-black"
}
`