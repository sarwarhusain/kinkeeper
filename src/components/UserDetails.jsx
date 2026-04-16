// "use client";

// import Image from "next/image";

// const UserDetails = ({ user }) => {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="card bg-base-100 shadow-xl border">
//         <div className="card-body">

//           {/* Top Section */}
//           <div className="flex flex-col md:flex-row items-center gap-6">

//             {/* Profile */}
//             <div className="text-center">
//               <div className="avatar">
//                 <div className="w-20 rounded-full">
//                   <Image
//                     src={user.picture}
//                     alt={user.name}
//                     width={80}
//                     height={80}
//                   />
//                 </div>
//               </div>

//               <h2 className="text-lg font-semibold mt-2">
//                 {user.name}
//               </h2>

//               <span className="badge badge-error mt-1">
//                 {user.status}
//               </span>

//               <p className="text-sm text-gray-500 mt-2">
//                 {user.bio}
//               </p>

//               <div className="mt-4 flex flex-col gap-2">
//                 <button className="btn btn-sm">Snooze 2 Weeks</button>
//                 <button className="btn btn-sm btn-outline">Archive</button>
//                 <button className="btn btn-sm btn-error">Delete</button>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="flex-1 grid grid-cols-3 gap-4 text-center">

//               <div className="bg-base-200 p-4 rounded-lg">
//                 <h3 className="text-xl font-bold">
//                   {user.days_since_contact}
//                 </h3>
//                 <p className="text-sm">Days Since Contact</p>
//               </div>

//               <div className="bg-base-200 p-4 rounded-lg">
//                 <h3 className="text-xl font-bold">
//                   {user.goal}
//                 </h3>
//                 <p className="text-sm">Goal (Days)</p>
//               </div>

//               <div className="bg-base-200 p-4 rounded-lg">
//                 <h3 className="text-xl font-bold">
//                   {user.next_due_date}
//                 </h3>
//                 <p className="text-sm">Next Due</p>
//               </div>

//             </div>
//           </div>

//           {/* Relationship Goal */}
//           <div className="mt-6">
//             <div className="flex justify-between items-center">
//               <h3 className="font-semibold">Relationship Goal</h3>
//               <button className="btn btn-xs">Edit</button>
//             </div>

//             <div className="mt-2">
//               <progress
//                 className="progress progress-success w-full"
//                 value={user.days_since_contact}
//                 max={user.goal}
//               ></progress>

//               <p className="text-sm mt-1">
//                 {user.days_since_contact} / {user.goal} days
//               </p>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="mt-6">
//             <h3 className="font-semibold mb-2">Quick Check-in</h3>

//             <div className="grid grid-cols-3 gap-3">
//               <button className="btn">📞 Call</button>
//               <button className="btn">💬 Text</button>
//               <button className="btn">🎥 Video</button>
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="mt-4">
//             {user.tags.map((tag, index) => (
//               <span key={index} className="badge badge-outline mr-2">
//                 {tag}
//               </span>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;