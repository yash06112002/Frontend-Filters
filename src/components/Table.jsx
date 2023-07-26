import DataTable from 'react-data-table-component';
import "../styles/Pagination.css"

const Table = ({ data }) => {
    if (data[0] === undefined) return null

    const attributes = Object.keys(data[0])
    const columns = attributes.map(item => {
        return {
            name: item,
            selector: row => row[item],
            sortable: true,
        }
    })

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                noDataComponent="No data found"
            />
        </>
    );
};

export default Table;
