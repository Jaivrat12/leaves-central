import { Box, Button, Typography } from '@mui/material';

const LeaveRequest = ({ request, isApprovable, approve }) => {

    return (

        <Box sx={{ mt: 2 }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginBottom={1}
            >
                <Typography>
                    <b>{request.type}</b> request
                </Typography>

                { request.isApproved === null ? isApprovable && (
                    <Box display="flex" gap={1}>
                        <Button
                            variant="contained"
                            // color="success"
                            onClick={ () => approve(request.id, true) }
                        >
                            Approve
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={ () => approve(request.id, false) }
                        >
                            Reject
                        </Button>
                    </Box>
                ) : (
                    <Typography
                        fontWeight="bold"
                        color={ request.isApproved ? 'green' : 'error' }
                    >
                        { request.isApproved ? 'Accepted' : 'Rejected' }
                    </Typography>
                )}
            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                // marginBottom={ 1 }
            >
                <Typography>
                    by {request.name}
                </Typography>

                { request.isApproved === null && isApprovable && (
                    <textarea
                        rows="1" cols="30"
                        placeholder=" Your (HoD) comments here..."
                        style={{ fontSize: '0.925rem' }}
                    ></textarea>
                )}
            </Box>

            <Typography marginBottom={2}>
                at <u>{request.from}</u> for <u>{request.for}</u> days
            </Typography>

            { request.isApproved === null && (
                <Typography
                    sx={{
                        p: 2,
                        background: '#44444410',
                        boxShadow: '0px 2px 3px #8888 inset',
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    {request.description}
                </Typography>
            )}

            <hr />
        </Box>
    );
}

export default LeaveRequest;