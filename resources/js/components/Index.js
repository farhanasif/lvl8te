import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'reactstrap';

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-3">
                <h3>Tasks</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>
                                <Button color="success " size="sm">Edit</Button>{' '}
                                <Button color="danger " size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Index;


if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}