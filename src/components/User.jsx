import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function User() {
  const user = useLoaderData();
  return (
    <div>
      <h2>Total Users: {user.length}</h2>
      <div>
        {user.map((user) => (
          <p key={user._id}>
            {" "}
            {user.name} - {user.email}
          </p>
        ))}
      </div>
      <Link to={"/"}>Go Back</Link>
    </div>
  );
}
