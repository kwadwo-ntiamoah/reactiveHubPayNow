import tw from "tailwind-styled-components";

export const TableWrapper = tw.div`
overflow-x-auto
`
export const Table = tw.table`
    min-w-full divide-y divide-gray-200
`

export const TableRow = tw.tr``
export const TableHead = tw.thead``

export const TableHeader = tw.th`
px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
`

export const TableBody = tw.tbody`
bg-white divide-y divide-gray-200
`

export const TableData = tw.td`
px-6 py-4 whitespace-nowrap
`

export const TableDataFlex = tw.div`
flex space-x-2 items-center
`

export const TableDataFlexCol = tw.div`
flex flex-col
`

export const TableFooter = tw.tfoot``