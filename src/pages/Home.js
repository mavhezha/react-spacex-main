import { IconButton } from '@mui/material'
import apis from 'apis'
import DataTable from 'components/DataTable'
import Summary from 'components/Summary'
import React, { useEffect, useState } from 'react'
import { FiEye } from 'react-icons/fi'

export default function Home() {
    const [data, setData] = useState([])
    const [summaryData, setSummaryData] = useState([])
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const tableData = data

    const tableColumns = [
        {
            headerName: 'Name',
            field: 'name',
            flex: 1
        },
        {
            headerName: 'Launch date (UTC)',
            field: 'date_utc',
            renderCell: (params) => {
                return new Date(params.value)?.toLocaleDateString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC'
                })
            },
            flex: 1
        },
        { headerName: 'Rocket ID', field: 'rocket', flex: 1 },
        { headerName: 'Details', field: 'details', flex: 1 },

        {
            headerName: 'Actions',
            field: 'actions',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <div style={{ textDecoration: 'none' }}>
                            <IconButton
                                size='small'
                                variant={'contained'}
                                color='primary'
                                onClick={() => {
                                    setOpen(true)
                                    setSummaryData(params.row)
                                }}
                            >
                                <FiEye />
                            </IconButton>
                        </div>
                    </>
                )
            }
        }
    ]

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const url = 'launches'

        try {
            setLoading(true)
            const response = await apis.get(url)
            setData(response.data)
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }
    }

    return (
        <>
            <DataTable rows={tableData} columns={tableColumns} />

            <Summary open={open} setOpen={setOpen} summaryData={summaryData} />
        </>
    )
}
