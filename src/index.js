import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import App from './App';
import Apply from './pages/apply';
import Requests from './pages/requests';
import Admin from './pages/admin';

import './index.css';
import '@fontsource/public-sans';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: (
			<>
				<h1>404 Page Not Found</h1>
				<Link to="/">Go to /</Link>
			</>
		),
		children: [
			{
				path: 'apply',
				element: <Apply />,
			},
			{
				path: 'requests',
				element: <Requests />,
			},
			{
				path: 'admin',
				element: <Admin />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);