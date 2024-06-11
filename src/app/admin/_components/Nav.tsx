"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, HTMLAttributes, ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserNav } from "./UserNav";
import { Search } from "./Search";
import Image from "next/image";

interface MainNavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Nav({ children, ...props }: MainNavProps) {
  return (
    <>
      <div className="hidden flex-col md:flex bg-slate-50">
        <div className="border-b">
          <div className="flex h-16 items-center px-8">
            <Image
              src="/school-logo.png"
              width="40"
              height="40"
              alt="School Logo"
              className=""
            />
            <nav className={cn("flex items-center space-x-4 mx-6 ")} {...props}>
              {children}
            </nav>
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "text-xs font-medium transition-colors p-2 rounded-md text-primary  hover:text-secondary hover:bg-primary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-primary text-secondary"
      )}
    />
  );
}
