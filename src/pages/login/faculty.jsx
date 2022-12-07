import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import db from '../../db';

const FacultyLogin = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        id: '',
        doj: '',
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
        if (db.session.login('faculty', credentials)) {
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
                Faculty Login
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

                <FormControl
                    fullWidth
                    sx={{ mb: 2 }}
                >
                    <InputLabel required>
                        Faculty Name
                    </InputLabel>

                    <Select
                        // value={ credentials.name ?? null }
                        defaultValue=""
                        label="Faculty Name"
                        onChange={ (e) => handleChange('id', e.target.value) }
                        required
                    >
                        { db.users.getAll({ role: 'faculty' }).map(faculty =>
                            <MenuItem key={ faculty.id } value={ faculty.id }>
                                { faculty.name }
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>

                <TextField
                    label="Date of Joining"
                    type="date"
                    value={ credentials.doj }
                    onChange={ (e) => handleChange('doj', e.target.value) }
                    InputLabelProps={{ shrink: true }}
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

export default FacultyLogin;