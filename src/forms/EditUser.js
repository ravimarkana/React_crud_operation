import React, { useState, useEffect } from "react";

const EditUser = props => {
    const [user, setUser] = useState(props.currentUser);
    let checked = user.status === "Active" ? "true" : "";
    let unchecked = user.status === "Inactive" ? "true" : "";
    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    const handleInputChange = event => {
        console.log('event: ', event);
        const { name, value } = event.target;

        setUser({ ...user, [name]: value });
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.updateUser(user.id, user);
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Name"
                required
            />
            <label>Email</label>
            <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Email"
                required
            />
            <label >Contact:</label>
            <input
                type="text"
                name="contact"
                value={user.contact}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Contact"
                required
            />
            <br />
            <label >Status:</label>
            <div className="form-check">
                <label className="form-check-label">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="status"
                        value="Active"
                        onChange={handleInputChange}
                        // checked={checked}
                    />
                    Active
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="status"
                        value="Inactive"
                        onChange={handleInputChange}
                        // checked={unchecked}
                    />
                    Inactive
                </label>
            </div>
            <br />
            <button className="button btn btn-primary">Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button btn btn-secondary"
            >
                Cancel
            </button>
        </form>
    );
};

export default EditUser;
