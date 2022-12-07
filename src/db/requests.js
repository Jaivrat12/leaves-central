import { stringify } from '../lib/utils';
import users from './users';

const requests = {

    get: function (id) {

        const requests = this.getAll();
        return requests.find((request) => request.id === id);
    },
    getAll: (filters) => {

        let requests = JSON.parse(localStorage.getItem('requests'));

        if (filters?.userId) {
            requests = requests.filter((request) =>
                request.userId === filters.userId
            );
        }

        if (filters?.active) {
            requests = requests.filter((request) =>
                request.isApproved === null
            );
        } else if (filters?.history) {
            requests = requests.filter((request) =>
                request.isApproved !== null
            );
        }

        return requests;
    },
    post: function (request) {

        const requests = this.getAll();
        requests.push({
            ...request,
            id: requests.length,
            comments: '',
            isApproved: null
        });
        localStorage.setItem('requests', JSON.stringify(requests));
    },
    put: function (id, newData) {

        const requests = this.getAll();
        for (let i = 0; i < requests.length; i++) {
            if (requests[i].id === id) {
                requests[i] = newData;
                break;
            }
        }
        localStorage.setItem('requests', stringify(requests));
    },
    approve: function (id, isApproved) {

        const request = this.get(id);
        if (isApproved) {
            users.deductLeaves(request.userId, request.type, request.for);
        }
        request.isApproved = isApproved;
        this.put(id, request);
    }
}

export default requests;