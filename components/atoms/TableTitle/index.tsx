import React from 'react'
interface TableTitleProps {
    title: string
}
const TableTitle = (props: TableTitleProps) => {
    const { title } = props
    return (
        <h1 className='text-2xl font-bold mb-2'>{title}</h1>
    )
}

export default TableTitle
