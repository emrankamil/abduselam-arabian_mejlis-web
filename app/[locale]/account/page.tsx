import React from "react";
import Link from "next/link";
import Auth from "@/components/account/auth";
import { BiSolidDashboard } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { PiFolderOpenFill } from "react-icons/pi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { getSession } from "@/lib";
import { LogOutPopover } from "@/components/account/signoutPopup";

const UserMenuItems = [
  { label: "Account", href: "/account", icon: <BiSolidDashboard /> },
  { label: "Orders", href: "/account/orders", icon: <CiShoppingCart /> },
  { label: "My Saves", href: "/account/my-saves", icon: <PiFolderOpenFill /> },
  {
    label: "Account details",
    href: "/account-details",
    icon: <MdOutlineManageAccounts />,
  },
  {
    label: "Log out",
    href: "/api/auth/signout?callbackUrl=/account",
    icon: <LuLogOut />,
  },
];

const AdminMenuItems = [
  { label: "Account", href: "/account", icon: <BiSolidDashboard /> },
  {
    label: "Add Product",
    href: "/account/add-product",
    icon: <CiShoppingCart />,
  },
  {
    label: "All Products",
    href: "/account/all-products",
    icon: <PiFolderOpenFill />,
  },
  {
    label: "Chat",
    href: "/account/chat",
    icon: <MdOutlineManageAccounts />,
  },
  {
    label: "Log out",
    href: "/api/auth/signout?callbackUrl=/account",
    icon: <LuLogOut />,
  },
];

const Page = async () => {
  // const session = await getServerSession(authOptions);
  const session = await getSession();
  // console.log("session", session);
  if (!session) {
    return <Auth />;
  }

  // const session = {
  //   User_id: "673a3a890706e487aa3cdaa5",
  //   Name: "emran",
  //   Email: "emranhi001@gmail.com",
  //   User_type: "ADMIN",
  //   exp: 1739607703,
  // };

  return (
    <div className="space-y-16 h-full w-full">
      {/* banner */}
      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            My Account
          </h1>
        </div>
      </div>
      {/* Account Details */}
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-12 px-6 md:px-24">
        {/* Sidebar */}
        <div className="lg:w-1/4 gap-6 border-r border-gray-200 pr-4 md:pr-6 lg:pr-8">
          {(session.User_type === "USER" ? UserMenuItems : AdminMenuItems).map(
            (item) =>
              item.label == "Log out" ? (
                <LogOutPopover key={item.label} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center  font-medium  hover:text-primary space-x-3 md:space-x-4 py-3 border-y border-gray-200"
                >
                  <span className="text-xl md:text-2xl">{item.icon}</span>
                  <span className="text-base md:text-lg">{item.label}</span>
                </Link>
              )
          )}
        </div>

        {/* Content */}
        <div className="lg:w-3/4 px-4 md:px-6 lg:px-8">
          <h2 className="text-lg md:text-xl font-bold">
            Hello{" "}
            <span className="text-primary/80">
              {session.Name ?? session.Email}
            </span>{" "}
            <span className=" md:text-base ">
              (not{" "}
              <span className="text-black">
                {session.Name ?? session.Email}?)
              </span>{" "}
              {/* <Link
                href="/api/auth/signout?callbackUrl=/account"
                className="text-primary/80"
              >
                Log out
              </Link> */}
              <LogOutPopover />
            </span>
          </h2>
          <p className=" mt-2  md:text-base">
            From your account dashboard you can view your recent orders , manage
            your shipping and billing addresses , and edit your password and
            account details .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

// function SignOut() {
//   return (
//     <form
//       action={() => {
//         signOut();
//       }}
//     >
//       <button type="submit">Sign out</button>
//     </form>
//   );
// }
