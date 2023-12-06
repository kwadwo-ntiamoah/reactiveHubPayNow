import tw from 'tailwind-styled-components'

type ContainerSize = "normal" | "small" | "extrasmall"

interface ContainerProps {
    $size?: ContainerSize
    $allowYPadding?: boolean
}

export const Container = tw.div<ContainerProps> `
${(p) => p.$size == "small" 
            ? "max-w-screen-sm md:mx-24"
            : p.$size == "extrasmall" 
                ? "max-w-screen-sm md:mx-36"
                : "max-w-screen-2xl mx-auto"
            }
${(p) => p.$allowYPadding ? "py-5": "py-0"}
w-full h-full px-8
`
export const RoundedWhiteDiv = tw.div`
bg-white p-10 rounded-md
`