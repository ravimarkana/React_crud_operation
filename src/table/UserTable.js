import React from "react";

const TopData = [
    { name: "Name" },
    { name: "Email" },
    { name: "Contact" },
    { name: "Status" },
    { name: "Actions" }
]

const UserTable = props => (
    <table className="table topp table-striped">
        <thead>
            <tr >
                {TopData.map(data => (
                    <th key={data.name}>{data.name}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                        <td>{user.status}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(user);
                                }}
                                className="button btn btn-primary"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => props.deleteUser(user.id)}
                                className="button btn btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td className="center" colSpan={5}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default UserTable;
