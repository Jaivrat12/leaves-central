import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography
} from '@mui/material';
import db from '../../db';

const HodLogin = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        id: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (prop, value) => {
        setCredentials({
            ...credentials,
            [prop]: value
        });
    };

    const onSubmit = (e) => {

        e.preventDefault();
        if (db.session.login('hod', credentials)) {
            navigate('/');
        } else {
            setError('Invalid credentials!');
        }
    };

    return (

        <Container maxWidth="md">
            <Typography
                variant="h4"
                textAlign="center"
                marginTop={5}
                marginBottom={5}
            >
                HOD Login
            </Typography>

            <Box
                onSubmit={ onSubmit }
                component="form"
                sx={{
                    mx: 'auto',
                    maxWidth: '420px',
                }}
            >
                <Typography
                    color="error"
                    textAlign="center"
                    gutterBottom
                >
                    { error }
                </Typography>

                <TextField
                    label="HOD ID"
                    value={ credentials.id }
                    onChange={ (e) => handleChange('id', e.target.value) }
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />

                <TextField
                    label="Password"
                    type="password"
                    value={ credentials.password }
                    onChange={ (e) => handleChange('password', e.target.value) }
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                />

                <Box
                    display="flex"
                    justifyContent="center"
                >
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ px: 8 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default HodLogin;