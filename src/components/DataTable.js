import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport
} from '@mui/x-data-grid'
import { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        '&.MuiDataGrid-root .MuiTablePagination-root': {
            margin: 'auto'
        },
        '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus': {
            outline: 'none'
        },
        '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none'
        },
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none'
        }
    }
})

export function SortedDescendingIcon() {
    return <ExpandMoreIcon className='icon' />
}

export function SortedAscendingIcon() {
    return <ExpandLessIcon className='icon' />
}

export default function DataTable({ rows, columns }) {
    const [pageSize, setPageSize] = useState(5)

    const classes = useStyles()

    return (
        <div style={{ minWidth: 700 }}>
            <DataGrid
                autoHeight={true}
                className={classes.root}
                disableSelectionOnClick
                rows={rows}
                columns={columns}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                components={{
                    ColumnSortedDescendingIcon: SortedDescendingIcon,
                    ColumnSortedAscendingIcon: SortedAscendingIcon
                }}
            />
        </div>
    )
}
