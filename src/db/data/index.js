import requests from './requests';
import users from './users';

const data = {
    requests, users,
    session: { user: users[0] }
};

export default data;