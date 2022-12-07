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
        login: (role, credentials) => {

            const user = users.get(credentials.id);

            let loginSuccess = false;
            if (user) {

                if (role === 'faculty') {

                    if (user.doj === credentials.doj) {
                        loginSuccess = true;
                    }
                } else if (['hod', 'admin'].includes(role)) {

                    if (user.password === credentials.password
                        && user.role === role
                    ) {
                        loginSuccess = true;
                    }
                }
            }

            if (loginSuccess) {
                localStorage.setItem('session', stringify({ user: user }));
            }
            return loginSuccess;
        },
        logout: () => localStorage.setItem(
            'session', stringify({ user: null })
        )
    },
    users: users,
    requests: requests,
};

export default db;