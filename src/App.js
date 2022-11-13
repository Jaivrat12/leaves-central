import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {

	return (

		<>
			<Navbar />

			<Box sx={{ my: 3 }}>
				<Outlet />
			</Box>
		</>
	);
}

export default App;