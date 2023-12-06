import tw from "tailwind-styled-components";

export const Form = tw.form`
    w-full flex flex-col space-y-4 py-5
`

export const InputWrapper = tw.div`
flex flex-col space-y-2
`

export const Input = tw.input`
border p-3 rounded-md outline-none focus:ring focus:ring-primary-100
`

export const Select = tw.select`
border p-3 rounded-md outline-none focus:ring focus:ring-primary-100
`

export const Label = tw.label`
`