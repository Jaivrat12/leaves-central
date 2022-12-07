import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import LeaveRequest from '../components/LeaveRequest';
import db from '../db';

// eslint-disable-next-line no-unused-vars
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

	const user = db.session.get().user;
	const hasAdminRole = ['hod', 'admin'].includes(user.role);

	const fetchRequests = () => ({
		active: db.requests.getAll({
			userId: !hasAdminRole && user.id,
			active: true
		}),
		history: db.requests.getAll({
			userId: !hasAdminRole && user.id,
			history: true
		})
	});
	const [requests, setRequests] = useState(fetchRequests());

	const approve = (id, isApproved) => {

		db.requests.approve(id, isApproved);
		setRequests(fetchRequests());
	};

    return (

        <Container maxWidth="md">
            <Typography
                variant="h6"
                color="GrayText"
            >
                { !hasAdminRole ? 'Your ' : 'All Leave ' }
				Requests
            </Typography>

            { requests.active.map((request) => (

                <LeaveRequest
					key={ request.id }
					request={ request }
					isApprovable={ hasAdminRole }
					approve={ approve }
				/>
            ))}

            <Typography
                variant="h6"
                color="GrayText"
                sx={{ mt: 4 }}
            >
                History
            </Typography>

            { requests.history.map((request) => (

                <LeaveRequest
					key={ request.id }
					request={ request }
				/>
            ))}
        </Container>
    );
}

export default Requests;