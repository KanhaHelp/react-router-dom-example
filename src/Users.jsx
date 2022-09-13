import React from 'react'

import { useEffect, useState } from 'react';



function Users() {
    const [users, setUsers] = React.useState([]);

    const allUsers = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((actualData) => setUsers(actualData))
            .catch((err) => {
                console.log(err.message);
            });
        ;
        // .then((json) => setUsers(json));
    }
    useEffect(() => {
        allUsers();

    }, []);

    return (
        <div>
            {console.log(users)}



            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserId</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                                <td>@{item.body}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    )
}

export default Users

