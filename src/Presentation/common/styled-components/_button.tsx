import tw from 'tailwind-styled-components';

type ButtonType = 'primary' | 'secondary' | 'outlined' | 'danger' | 'link' | 'default'

interface ButtonProps {
    $type?: ButtonType
}

export const Button = tw.button<ButtonProps>
`
${(p) => p.$type == 'primary' 
        ? "bg-primary-100 hover:bg-primary-200" // primary button
        : p.$type == 'secondary'
            ? "bg-secondary-100 hover:bg-secondary-200" // secondary button
            : p.$type == 'outlined'
                ? "border-2 border-primary-100" // outlined button
                : p.$type == 'danger' 
                    ?"bg-danger-100 hover:bg-danger-200" // danger button
                    : p.$type == 'link'
                        ? "bg-transparent border-0" // link button
                        : "bg-gray-300 hover:bg-gray-400" // default button
}
${(p) => p.$type == 'outlined' ? "text-primary-200" : 
        p.$type == 'link' ? "text-black" : "text-white"}
${(p) => p.disabled && "bg-gray-300 hover:bg-gray-400"}
flex space-x-3 items-center justify-center
w-full 
rounded-md 
py-3 px-5 
font-bold 
duration-100 
`

export const SvgButton = tw.svg`
    h-8 w-8
`

export const SvgButtonDiv = tw.button<ButtonProps>
`
${(p) => p.$type == 'primary' 
        ? "bg-primary-100 hover:bg-primary-200" // primary button
        : p.$type == 'secondary'
            ? "bg-secondary-100 hover:bg-secondary-200" // secondary button
            : p.$type == 'outlined'
                ? "border-2 border-primary-100" // outlined button
                : p.$type == 'danger' 
                    ?"bg-danger-100 hover:bg-danger-200" // danger button
                    : p.$type == 'link'
                        ? "bg-transparent border-0" // link button
                        : "bg-gray-300 hover:bg-gray-400" // de
}

h-8 w-8 rounded-md p-2 flex items-center justify-center text-white
`