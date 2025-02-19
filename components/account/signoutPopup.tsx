"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { logout } from "@/lib";
import { PopoverClose } from "@radix-ui/react-popover";

const handleSignOut = async () => {
  await logout();
};

export function LogOutPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">Log Out</Button>
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
