import { Container } from '@mui/material';

const Admin = () => {

    return (

        <Container maxWidth="lg" sx={{ overflowX: 'scroll' }}>
            <table class="admin-table">
                <tr>
                    <th colspan="3"></th>
                    <th colspan="3">Opening balance</th>
                    <th colspan="4">Available leaves till (now/current month)</th>
                    <th colspan="4">Leaves remaining</th>
                </tr>
                <tr>
                    <td>Name </td>
                    <td>Designation</td>
                    <td>DOJ(Date Of Joining)</td>
                    <td>CL</td>
                    <td>OL</td>
                    <td>SLP/OD/C-off</td>
                    <td>CL</td>
                    <td>OL</td>
                    <td>SLP/OD/C-off</td>
                    <td>LWP</td>
                    <td>CL</td>
                    <td>OL</td>
                    <td>SLP/OD/C-off</td>
                    <td>LWP</td>
                </tr>
                <tr>
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
                </tr>
            </table>
        </Container>
    );
}

export default Admin;