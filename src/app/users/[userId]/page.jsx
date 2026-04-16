import TimeLine from "@/components/TimeLine";
import Image from "next/image";

const userPromise = async function () {
  const res = await fetch("http://localhost:3000/UsersData.json");
  const data = await res.json();
  return data;
};

const DetailsPage = async ({ params }) => {
  const userDetails = await userPromise();
  const { userId } = await params;

  const user = userDetails.find((userData) => userData.id === parseInt(userId));

  // console.log(user);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl border">
        <div className="card-body">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile */}
            <div className="text-center">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <Image
                    src={user.img}
                    alt={user.name}
                    width={80}
                    height={80}
                    priority
                  />
                </div>
              </div>

              <h2 className="text-lg font-semibold mt-2">{user.name}</h2>
              <span className="badge badge-error mt-1">{user.status}</span>
              <p className="text-sm text-gray-500 mt-2">{user.bio}</p>

              <div className="mt-4 flex flex-col gap-2">
                <button className="btn btn-sm">Snooze 2 Weeks</button>
                <button className="btn btn-sm btn-outline">Archive</button>
                <button className="btn btn-sm btn-error">Delete</button>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Stats */}
              <div className="flex-1 grid grid-cols-3 gap-4 text-center">
                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="text-xl font-bold">
                    {user.days_since_contact}
                  </h3>
                  <p className="text-sm">Days Since Contact</p>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="text-xl font-bold">{user.goal}</h3>
                  <p className="text-sm">Goal (Days)</p>
                </div>

                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="text-xl font-bold">{user.next_due_date}</h3>
                  <p className="text-sm">Next Due</p>
                </div>
              </div>
              {/* Relationship Goal */}
              <div className="card mt-5 bg-base-100 card-xs shadow-sm flex justify-between">
                <div className="flex justify-between p-3">
                  <div>
                    <h2 className="card-title">Relationship Goal</h2>
                    <p className="font-bold">
                      <span className="text-gray-500">Connect every</span>{" "}
                      {user.goal} Days
                    </p>
                  </div>
                  <div>
                    <button className="btn ">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <TimeLine></TimeLine>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
