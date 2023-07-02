import { TableItemsI, tableItems } from '@/mocks/tableMocks'

const TableTh = () => {
    return (
        <>
            {tableItems.map((item: TableItemsI) => (
                <th key={item.id} scope='col' className={`${item.width} text-sm px-6 py-3  text-open-muted`}>{item.name}</th>
            ))}
        </>
    )
}

export default TableTh
