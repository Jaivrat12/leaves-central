import data from './data';
import requests from './requests';
import users from './users';
import { parse, stringify } from '../lib/utils';

const db = {
    load: function () {

        ['users', 'requests', 'session'].forEach((entity) => {

            if (!localStorage.getItem(entity)) {
                localStorage.setItem(entity, stringify(data[entity]));
            }
        });
    },
    session: {
        get: () => parse(
            localStorage.getItem('session')
        ),
    },
    users: users,
    requests: requests,
};

export default db;