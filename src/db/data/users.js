import leaves from './leaves';

const users = [
    {
        id: 'IRFN12',
        password: 'admin',
        name: 'Irfan',
        email: 'irfan@acropolis.in',
        role: 'admin',
        designation: 'Admin',
        doj: '2016-07-11',
        leaves: leaves.default
    },
    {
        id: 'GESA12',
        password: 'admin',
        name: 'Geeta Santosh',
        email: 'geetasantosh@acropolis.in',
        role: 'hod',
        designation: 'HOD',
        doj: '2016-07-11',
        leaves: leaves.default
    },
    {
        id: 'SHGO12',
        name: 'Shailesh Gondal',
        email: 'shaileshgondal@acropolis.in',
        role: 'faculty',
        designation: 'Associate Professor',
        doj: '2016-07-12',
        leaves: leaves.default
    },
    {
        id: 'PUPA12',
        name: 'Pushpa Pathak',
        email: 'pushpapathak@acropolis.in',
        role: 'faculty',
        designation: 'Associate Professor',
        doj: '2016-08-01',
        leaves: leaves.default
    }
];

export default users;