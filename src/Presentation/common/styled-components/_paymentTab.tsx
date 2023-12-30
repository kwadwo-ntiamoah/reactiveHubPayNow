import tw from 'tailwind-styled-components';


interface PaymentTabProps {
    $isActive?: boolean
}

export const PaymentTab = tw.button<PaymentTabProps>
`
${
    (p) => p.$isActive
        ? "border-x border-t bg-gray-50"
        : "border-b"
}

flex w-full grow items-center justify-center py-5 text-sm md:text-base
`

export const NetworkTab = tw.button<PaymentTabProps>
`
${
    (p) => p.$isActive
        ? "border-primary-100"
        : "border-gray-400"
}

rounded-full flex items-center justify-center w-16 h-16 md:w-24 md:h-24 border-2 md:border-4 md:p-3 relative mb-5`

export const NetworkTabImg = tw.img
`h-12 md:h-[62px] w-12 md:w-[62px] rounded-full object-contain`

export const NetworkTinkerWrapper = tw.div
`
absolute top-0 right-1
`

export const NetworkTinker = tw.div<PaymentTabProps>
`
${(p) => p.$isActive ? "block": "hidden"}
rounded-full h-3 w-3 md:h-5 md:w-5 border-2 md:border-4 border-white bg-green-500`