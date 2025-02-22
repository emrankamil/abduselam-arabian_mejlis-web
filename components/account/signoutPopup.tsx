"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { logout } from "@/lib";
import { PopoverClose } from "@radix-ui/react-popover";
import { LuLogOut } from "react-icons/lu";

const handleSignOut = async () => {
  await logout();
};

export function LogOutPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center px-0 font-medium  hover:text-primary space-x-3 md:space-x-4 py-3 border-y border-gray-200"
        >
          <span className="text-xl md:text-2xl">
            <LuLogOut />
          </span>
          <span className="text-base md:text-lg">Log out</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-background shadow-lg p-4 rounded-[20px] border border-primary">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Sign out</h4>
            <p className="text-sm text-muted-foreground">
              Are you sure you want to sign out?
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              className="bg-red-600 text-white rounded-xl w-24 hover:bg-red-700"
              variant="outline"
              onClick={handleSignOut}
            >
              Yes
            </Button>
            <PopoverClose asChild>
              <Button
                className="bg-gray-600 text-white rounded-xl w-24 hover:bg-gray-700"
                variant="outline"
              >
                Cancel
              </Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
