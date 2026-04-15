import User from "@/components/User";

const Users = async () => {
  const res = await fetch("http://localhost:3000/UsersData.json");
  const users = await res.json();
  console.log(users);
  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;

