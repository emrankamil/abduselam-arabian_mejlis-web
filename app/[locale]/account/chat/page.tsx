"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Chats = () => {
  // const [selectedChat, setSelectedChat] = useState<UserType | undefined>(
  //   undefined
  // );
  const { data: session } = useSession();
  const router = useRouter();

  if (!session || session.user.userType !== "ADMIN") {
    router.push("/account");
    return;
  }

  // const handleSelect = (user: UserType) => setSelectedChat(user);

  return (
    <div className="mt-48 px-24">
      <a href="/account">
        <h1>Return to My Account</h1>
      </a>
      <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        <p className="font-bold">Coming Soon</p>
        <p>This page will be available soon. Stay tuned!</p>
      </div>
    </div>
  );
};

export default Chats;

// import ChatUserCard from "@/components/dashboard/ChatUserCard";
// import SelectChatWaiter from "@/components/dashboard/SelectChatWait/SelectChatWaiter";
// import Users from "@/data/demoUsers";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import ChatSection from "@/components/dashboard/ChatSection";
// import { MdHome } from "react-icons/md";
// import Link from "next/link";

// return (
//   <div className="relative">
//     <div className="relative bg-[url('/chat_banner.png')] bg-cover bg-center h-[300px]">
//       <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
//       <div className="relative w-full h-full z-10 flex justify-center items-center">
//         <h1 className="text-5xl font-semibold text-white text-center leading-normal">
//           Chat
//         </h1>
//       </div>
//     </div>
//     {/* Breadcum */}
//     <div className="flex text-gray-800 dark:text-gray-300 max-w-4xl px-4 sm:px-6 lg:px-8">
//       <div className="flex items-center text-blue-500">
//         <MdHome />
//         <Link href="/account" className="mx-2">
//           Account
//         </Link>
//       </div>
//       {">"}
//       <p className="mx-2">My Orders</p>
//     </div>
//     {!selectedChat && (
//       <h1 className="font-semibold">Connect with your customers</h1>
//     )}
//     {selectedChat && (
//       <div className="flex items-center mt-6">
//         <Avatar>
//           <AvatarImage src={selectedChat.avatar} />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>

//         <p className="mx-3 inline-flex text-2xl font-semibold text-gray-700 dark:text-gray-200">
//           {selectedChat.first_name} {selectedChat.last_name}
//         </p>

//         <Badge
//           variant={selectedChat.state === true ? "default" : "destructive"}
//         >
//           {selectedChat.state === true ? "Online" : "Away"}
//         </Badge>
//       </div>
//     )}

//     <div className="grid grid-col md:grid-cols-4 gap-1">
//       <div className="md:col-span-3 ">
//         {!selectedChat ? (
//           <div className="mt-32 flex flex-col justify-center items-center">
//             <SelectChatWaiter />
//             <p className="text-gray-600 dark:text-gray-400">Select a chat</p>
//           </div>
//         ) : (
//           <div>
//             <ChatSection messages={selectedChat.messages} />
//           </div>
//         )}
//       </div>
//       <div className="">
//         <h2>Contacts</h2>
//         {Users.map((user, id) => {
//           if (user.messages !== null) {
//             return (
//               <ChatUserCard
//                 key={id}
//                 avatar={user.avatar}
//                 first_name={user.first_name}
//                 last_name={user.last_name}
//                 state={user.state}
//                 handleClick={() => handleSelect(user)}
//               />
//             );
//           }
//         })}
//       </div>
//     </div>
//   </div>
// );
