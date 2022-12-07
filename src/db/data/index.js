import requests from './requests';
import users from './users';

const data = {
    requests, users,
    session: { user: null }
};

export default data;