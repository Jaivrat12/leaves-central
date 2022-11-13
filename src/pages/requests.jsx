import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import LeaveRequest from '../components/LeaveRequest';

const dummyRequests = [
	{
		id: 1,
		type: 'Vacation Leave (VL)',
		by: 'Prof. Nidhi Dahale',
		comments: '',
		from: '21/08/2022',
		for: '3.5',
		description: 'Dear sir/mam,\nI would like to take leave for ...',
		isApproved: null
	},
	{
		id: 2,
		type: 'Casual leave (CL)',
		by: 'Prof. Nitin Kulkarni',
		comments: '',
		from: '22/09/2022',
		for: '2',
		description: 'Dear sir/mam,\nI would like to take leave for ...',
		isApproved: null
	},
	{
		id: 3,
		type: 'Optional Leave (OL)',
		by: 'Prof. Nitin Kulkarni',
		comments: '',
		from: '22/09/2022',
		for: '2',
		description: 'Dear sir/mam,\nI would like to take leave for ...',
		isApproved: false
	},
	{
		id: 4,
		type: 'Optional Leave (OL)',
		by: 'Prof. Shailesh Gondal',
		comments: '',
		from: '22/09/2022',
		for: '2',
		description: 'Dear sir/mam,\nI would like to take leave for ...',
		isApproved: true
	}
];

const Requests = () => {

	const [requests, setRequests] = useState(JSON.parse(localStorage.getItem('requests')) ?? []);
	let activeRequests = [], history = [];

	const approve = (id, isApproved) => {

		const newRequests = requests.slice();
		for (let i = 0; i < newRequests.length; i++) {
			if (newRequests[i].id === id) {
				newRequests[i].isApproved = isApproved;
				break;
			}
		}
		setRequests(newRequests);
		localStorage.setItem('requests', JSON.stringify(newRequests));
	};

	requests.forEach((request) => {

		if (request.isApproved === null) {
			activeRequests.push(request);
		} else {
			history.push(request);
		}
	});

    return (

        <Container maxWidth="md">
            <Typography
                variant="h6"
                color="GrayText"
            >
                Leave Requests
            </Typography>

            { activeRequests.map((request) => (
                <LeaveRequest key={ request.id } request={ request } approve={ approve } />
            ))}


            <Typography
                variant="h6"
                color="GrayText"
                sx={{ mt: 4 }}
            >
                History
            </Typography>

            { history.map((request) => (
                <LeaveRequest key={ request.id } request={ request } />
            ))}
        </Container>
    );
}

export default Requests;