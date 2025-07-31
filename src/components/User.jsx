import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function User() {
  const loadedUser = useLoaderData();
  const [user, setUser] = useState(loadedUser);
  const handleDelete = (_id) => {
    console.log("Delete: ", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User deleted successfully");
          const remainingUsers = user.filter((user) => user._id !== _id);
          setUser(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h2>Total Users: {user.length}</h2>
      <div>
        {user.map((user) => (
          <p key={user._id}>
            {" "}
            {user.name} - {user.email}
            <Link to={`/update/${user._id}`}> Update</Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
      <Link to={"/"}>Go Back</Link>
    </div>
  );
}
