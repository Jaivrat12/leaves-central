import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import db from './db';

const App = () => {

	const location = useLocation()
	const navigate = useNavigate();
	const user = db.session.get().user;

	useEffect(() => {

		console.log(user);
		if (!user) {
			navigate('/login');
		}
		if (location.pathname === '/') {
			navigate('/apply');
		}
		if (location.pathname.startsWith('/admin')
			&& user.role !== 'admin'
		) {
			navigate('/');
		}
	}, [location.pathname, navigate, user]);

	return user && (

		<>
			<Navbar />

			<Box sx={{ my: 3 }}>
				<Outlet />
			</Box>
		</>
	);
}

export default App;