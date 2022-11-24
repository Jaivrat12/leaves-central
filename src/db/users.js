import { parse, stringify } from '../lib/utils';

const users = {

    get: function (id) {

        const users = this.getAll();
        return users.find((user) => user.id === id);
    },
    getAll: () => parse(
        localStorage.getItem('users')
    ),
    put: function (id, newData) {

        const users = this.getAll();
        for (let i = 0; users.length; i++) {
            if (users[i].id === id) {
                users[i] = newData;
                break;
            }
        }
        localStorage.setItem('users', stringify(users));
    },
    hasLeaves: function (id, leaveType, dur) {

        const user = this.get(id);
        for (let i = 0; i < user.leaves.length; i++) {
            if (user.leaves[i].type === leaveType) {
                return user.leaves[i].max >= user.leaves[i].taken + dur;
            }
        }
    },
    deductLeaves: function (id, leaveType, dur) {

        if (!this.hasLeaves(id, leaveType, dur)) {
            throw Error(`Not enough ${ leaveType } leaves`);
        }

        const user = this.get(id);
        for (let i = 0; i < user.leaves.length; i++) {

            if (user.leaves[i].type === leaveType) {
                user.leaves[i].taken += dur;
                break;
            }
        }
        this.put(id, user);
    },
};

export default users;