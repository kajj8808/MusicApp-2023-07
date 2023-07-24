"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { cls } from "../utils/utils";

function SideBarLayout({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname().split("/")[1];
  return (
    <div>
      <div className="fixed h-screen w-60 bg-[#F7F9FC]">
        <ul className="px-6 pt-5">
          <li
            className={cls(
              "rounded-full px-5 py-2 text-lg",
              pathname === "" ? "bg-[#f2f6fc] ring-1 ring-black" : "",
            )}
          >
            <Link href={"/"}>HOME</Link>
          </li>
          <li
            className={cls(
              "rounded-full px-5 py-2 text-lg",
              pathname === "search" ? "bg-[#f2f6fc] ring-1 ring-black" : "",
            )}
          >
            <Link href={"/search"}>SEARCH</Link>
          </li>
        </ul>
      </div>
      <div className="pl-60">
        <div className="px-4 py-5">{children}</div>
      </div>
    </div>
  );
}

export default SideBarLayout;
