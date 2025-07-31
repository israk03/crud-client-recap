import { Link, useLoaderData } from "react-router-dom";

export default function Update() {
  const loadedUser = useLoaderData();
  console.log(loadedUser);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }
    const updateUser = { name, email };
    console.log("updated user", updateUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User updated successfully");
          form.reset();
          // Optionally, you can redirect or update the UI to reflect the changes
          window.location.href = `/users`; // Redirect to the users page
        }
      });
  };
  return (
    <div>
      <h2>Update User: {loadedUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUser.email}
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
      <Link to={"/users"}>Back</Link>
    </div>
  );
}
