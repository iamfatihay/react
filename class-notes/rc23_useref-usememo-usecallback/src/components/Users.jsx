import React from "react";
import UserItem from "./UserItem";

const Users = () => {
  console.log("USERS COMPONENT RENDERED");

  return (
    <div className="users">
      {[].map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
