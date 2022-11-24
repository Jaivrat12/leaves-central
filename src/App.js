import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import db from './db';

const App = () => {

	const navigate = useNavigate();
	const session = db.session.get();
	useEffect(() => {

		console.log(session);
		if (session.user === null) {
			navigate('/login');
		}
	}, [navigate, session]);

	return session.user && (

		<>
			<Navbar />

			<Box sx={{ my: 3 }}>
				<Outlet />
			</Box>
		</>
	);
}

export default App;