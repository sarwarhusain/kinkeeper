import User from "@/components/User";

const Users = async () => {
  const res = await fetch("http://localhost:3000/UsersData.json");
  const users = await res.json();
  // console.log(users);
  return (
    <div className=" ">
      <h2>Your Friends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
