"use client";

import { UserButton } from "@clerk/nextjs";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="hidden lg:flex-1 lg:flex bg-yellow-500">
        Search{/* TODO : Add Search */}
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
