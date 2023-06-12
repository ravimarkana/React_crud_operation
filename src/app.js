import React, { useState, Fragment } from "react";
import AddUser from "./forms/AddUser";
import EditUser from "./forms/EditUser";
import UserTable from "./table/UserTable";

const App = () => {
  // Data
  const usersData = [
    { id: 1, name: "Ravi", email: "ravi123@abc.com", contact: 9876543210,status:"Active" },
    { id: 2, name: "Himalay", email: "himalay123@abc.com", contact: 9876543210,status:"Inactive" },
    { id: 3, name: "Jimi", email: "jimi123@abc.com", contact: 9876543210,status:"Active" }
  ];

  const FormState = { id: null, name: "", email: "", contact: "",status:"" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(FormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      contact: user.contact,
      status: user.status
    });
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUser addUser={addUser} />
            </Fragment>
          )}
        </div>
        <br />
        <div className="flex-large top">
          <h2 className="center">View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
