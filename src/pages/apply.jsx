import { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import db from '../db';
import { useNavigate } from 'react-router-dom';

const Apply = () => {

    const navigate = useNavigate();

    const user = db.users.get(db.session.get().user.id);
    const [application, setApplication] = useState({
        type: '',
        userId: user.id,
        name: user.name,
        email: user.email,
        from: new Date().toISOString().split('T')[0],
        for: 1,
        description: ''
    });

    const handleChange = (prop, value) => {
        setApplication({
            ...application,
            [prop]: value
        });
    };

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
        navigate('/requests');
    };

    return (

        <Container maxWidth="md">

            <Typography
                variant="h4"
                textAlign="center"
                marginBottom={5}
            >
                Apply for Leave
            </Typography>

            { user && (

                <form onSubmit={ submitRequest }>
                    <Box sx={{ mb: 3 }}>
                        <Box display="flex" sx={{ mb: 3 }}>
                            <input
                                type="radio"
                                style={{ visibility: 'hidden' }}
                            />
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography textAlign="center" fontWeight="bold">
                                        Leave ID
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography textAlign="center" fontWeight="bold">
                                        Leave Type
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography textAlign="center" fontWeight="bold">
                                        Max available
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography textAlign="center" fontWeight="bold">
                                        Total leaves taken
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        <hr />

                        { user.leaves.map((row) => {

                            const disabled = row.max === row.taken;
                            return (

                                <Box key={ row.type } display="flex">
                                    <input
                                        type="radio"
                                        name="leave-type"
                                        onClick={ () => handleChange('type', row.type) }
                                        required
                                        disabled={ disabled }
                                    />
                                    <Grid container>
                                        { Object.keys(row).map((col, i) => (
                                            <Grid key={ i } item xs={3}>
                                                <Typography
                                                    textAlign="center"
                                                    color={ disabled ? 'silver' : 'inherit' }
                                                >
                                                    {row[col]}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            )
                        })}
                    </Box>

                    <Typography fontWeight="bold" gutterBottom>
                        Enter Your Details
                    </Typography>

                    <Box display="flex" gap={ 2 } sx={{ mb: 2 }}>
                        <TextField
                            size="small"
                            label="Fullname"
                            value={ application.name }
                            onChange={ (e) => handleChange('name', e.target.value) }
                            fullWidth
                            disabled
                            required
                        />

                        <TextField
                            size="small"
                            label="Email ID"
                            type="email"
                            value={ application.email }
                            onChange={ (e) => handleChange('email', e.target.value) }
                            fullWidth
                            disabled
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