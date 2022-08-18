import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    backdropFilter: 'blur(10px)',
    borderRadius: 2
}

export default function Summary({ open, setOpen, summaryData }) {
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography variant='h6' component='h2'>
                        Summary for {summaryData?.name}'s launch
                    </Typography>
                    <Typography
                        variant='h6'
                        style={{ fontSize: 16 }}
                        sx={{ mt: 2 }}
                    >
                        Name: {summaryData?.name}
                    </Typography>
                    <Typography
                        variant='h6'
                        style={{ fontSize: 16 }}
                        sx={{ mt: 2 }}
                    >
                        Launch Date (UTC):{' '}
                        {new Date(summaryData?.date_utc)?.toLocaleDateString(
                            'en-US',
                            {
                                hour: '2-digit',
                                minute: '2-digit',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                timeZone: 'UTC'
                            }
                        )}
                    </Typography>
                    <Typography
                        variant='h6'
                        style={{ fontSize: 16 }}
                        sx={{ mt: 2 }}
                    >
                        Rocket ID: {summaryData?.rocket}
                    </Typography>
                    <Typography
                        variant='h6'
                        style={{ fontSize: 16 }}
                        sx={{ mt: 2 }}
                    >
                        Launchpad ID : {summaryData?.launchpad}
                    </Typography>
                    <Typography
                        variant='h6'
                        style={{ fontSize: 16 }}
                        sx={{ mt: 2 }}
                    >
                        Details
                    </Typography>
                    <Typography>
                        {summaryData?.details
                            ? summaryData?.details
                            : 'No Details Available'}
                    </Typography>
                    <Typography
                        variant='h6'
                        style={{ fontSize: 16 }}
                        sx={{ mt: 2 }}
                    >
                        Success:{' '}
                        {summaryData?.success
                            ? JSON.stringify(summaryData?.success)
                            : '-'}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
