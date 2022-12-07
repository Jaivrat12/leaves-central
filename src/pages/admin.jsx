import { Container } from '@mui/material';
import db from '../db';

const Admin = () => {

    const getMaxLeaves = (user, leaveType) => {
        return user.leaves
            .find(leave => leave.id === leaveType)
            .max;
    };

    const getTakenLeaves = (user, leaveType) => {
        return user.leaves
            .find(leave => leave.id === leaveType)
            .taken;
    };

    const getRemLeaves = (user, leaveType) => {
        const leave = user.leaves.find(leave => leave.id === leaveType);
        return leave.max - leave.taken;
    };

    return (

        <Container maxWidth="lg" sx={{ overflowX: 'scroll' }}>
            <table class="admin-table">
                <tr>
                    <th colspan="3"></th>
                    <th colspan="3">Opening balance</th>
                    <th colspan="4">Leaves Availed till (now/current month)</th>
                    <th colspan="4">Leaves remaining</th>
                </tr>

                <tr>
                    <td>Name </td>
                    <td>Designation</td>
                    <td>DOJ(Date Of Joining)</td>
                    <td>CL</td>
                    <td>OL</td>
                    <td>SpL/OD/C-off</td>
                    <td>CL</td>
                    <td>OL</td>
                    <td>SpL/OD/C-off</td>
                    <td>LWP</td>
                    <td>CL</td>
                    <td>OL</td>
                    <td>SpL/OD/C-off</td>
                    <td>LWP</td>
                </tr>

                { db.users.getAll().map(user =>

                    <tr>
                        <td>
                            <a href="#link">{ user.name }</a>
                        </td>
                        <td>{ user.designation }</td>
                        <td>{ user.doj }</td>

                        <td>{ getMaxLeaves(user, 'CL') }</td>
                        <td>{ getMaxLeaves(user, 'OL') }</td>
                        <td>{ getMaxLeaves(user, 'SPL') }</td>

                        <td>{ getTakenLeaves(user, 'CL') }</td>
                        <td>{ getTakenLeaves(user, 'OL') }</td>
                        <td>{ getTakenLeaves(user, 'SPL') }</td>
                        <td>{ getTakenLeaves(user, 'LWP') }</td>

                        <td>{ getRemLeaves(user, 'CL') }</td>
                        <td>{ getRemLeaves(user, 'OL') }</td>
                        <td>{ getRemLeaves(user, 'SPL') }</td>
                        <td>{ getRemLeaves(user, 'LWP') }</td>
                    </tr>
                )}

                {/* <tr>
                    <td>
                        <a href="#link">Mrs. Geeta Santosh</a>
                    </td>
                    <td>HOD</td>
                    <td>11/07/16</td>
                    <td>13</td>
                    <td>2</td>
                    <td> </td>
                    <td>1</td>
                    <td></td>
                    <td>0</td>
                    <td></td>
                    <td>12</td>
                    <td>2</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <a href="#link"> Mr. Shailesh Gondal</a>
                    </td>
                    <td>Associate Professer</td>
                    <td>12/07/06</td>
                    <td>13</td>
                    <td>2</td>
                    <td> </td>
                    <td>3</td>
                    <td>2</td>
                    <td>0</td>
                    <td></td>
                    <td>10</td>
                    <td>0</td>
                    <td>0</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <a href="#link">Mrs. Pushpa Pathak</a>
                    </td>
                    <td>Associate Professer</td>
                    <td>01/08/06</td>
                    <td>13</td>
                    <td>2</td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        ...
                    </td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        ...
                    </td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> */}
            </table>
        </Container>
    );
}

export default Admin;