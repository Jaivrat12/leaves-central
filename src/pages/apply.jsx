import { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

const users = [
    {
        id: 'ABC123',
        name: 'XYZ',
        leaves: [
            {
                type: 'Vacation Leave',
                max: 30,
                taken: 0
            },
            {
                type: 'Casual Leave',
                max: 30,
                taken: 0
            },
            {
                type: 'Optional Leave',
                max: 2,
                taken: 0
            },
        ]
    }
];

const Apply = () => {

    const [userId, setUserId] = useState('ABC123');
    const getUser = () => users.find((user) => user.id === userId);
    const [user, setUser] = useState(getUser(userId));
    const [application, setApplication] = useState({
        type: '',
        by: '',
        email: '',
        from: new Date().toISOString().split('T')[0],
        for: 1,
        description: ''
    });

    const handleChange = (prop, value) => {
        setApplication({
            ...application,
            [prop]: value
        });
    }

    const submitRequest = (e) => {

        e.preventDefault();
        const requests = JSON.parse(localStorage.getItem('requests')) ?? [];
        requests.push({
            ...application,
            id: requests.length,
            comments: '',
            isApproved: null
        });
        localStorage.setItem('requests', JSON.stringify(requests));
        alert('Your request has been submitted!');
    }

    return (

        <Container maxWidth="md">

            <Typography
                variant="h4"
                textAlign="center"
                marginBottom={5}
            >
                Apply for Leave
            </Typography>

            <Box
                display="flex"
                justifyContent="center"
                marginBottom={ 3 }
            >
                <TextField
                    size="small"
                    label="Your ID (6 characters)"
                    value={ userId }
                    onChange={ (e) => setUserId(e.target.value) }
                    sx={{ mr: 2 }}
                />

                <Button
                    variant="contained"
                    onClick={ () => setUser(getUser(userId)) }
                >
                    Fetch Leaves Data
                </Button>
            </Box>

            { user && (

                <form onSubmit={ submitRequest }>
                    <Box sx={{ mb: 3 }}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography textAlign="center" fontWeight="bold">
                                    Leave Type
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography textAlign="center" fontWeight="bold">
                                    Max available
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography textAlign="center" fontWeight="bold">
                                    Total leaves taken
                                </Typography>
                            </Grid>
                        </Grid>

                        <hr />

                        { user.leaves.map((row) => (

                            <Box display="flex">
                                <input
                                    type="radio"
                                    name="leave-type"
                                    onClick={ () => handleChange('type', row.type) }
                                    required
                                />
                                <Grid container>
                                    { Object.keys(row).map((col) => (
                                        <Grid item xs={4}>
                                            <Typography textAlign="center">
                                                {row[col]}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        ))}
                    </Box>

                    <Typography fontWeight="bold" gutterBottom>
                        Enter Your Details
                    </Typography>

                    <Box display="flex" gap={ 2 } sx={{ mb: 2 }}>
                        <TextField
                            size="small"
                            label="Fullname"
                            value={ application.by }
                            onChange={ (e) => handleChange('by', e.target.value) }
                            fullWidth
                            required
                        />

                        <TextField
                            size="small"
                            label="Email ID"
                            type="email"
                            value={ application.email }
                            onChange={ (e) => handleChange('email', e.target.value) }
                            fullWidth
                            required
                        />
                    </Box>

                    <Box display="flex" gap={ 2 } sx={{ mb: 3 }}>
                        <TextField
                            size="small"
                            label="Leave From"
                            InputLabelProps={{ shrink: true }}
                            type="date"
                            value={ application.from }
                            onChange={ (e) => handleChange('from', e.target.value) }
                            fullWidth
                            required
                        />

                        <TextField
                            size="small"
                            label="For (days)"
                            type="number"
                            value={ application.for }
                            onChange={ (e) => handleChange('for', e.target.value) }
                            fullWidth
                            required
                        />
                    </Box>

                    <TextField
                        label="Write your leave application"
                        rows={6}
                        multiline
                        value={ application.description }
                        onChange={ (e) => handleChange('description', e.target.value) }
                        fullWidth
                        required
                    />

                    <Box
                        display="flex"
                        justifyContent="center"
                        marginTop={2}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                        >
                            Request Leave
                        </Button>
                    </Box>
                </form>
            )}
        </Container>
    );
}

export default Apply;