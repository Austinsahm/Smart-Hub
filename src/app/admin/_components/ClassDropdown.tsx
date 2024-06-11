"use client";

import React, { useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ClassesProps = {
  id: number;
  class: string;
};

export function ClassDropdown() {
  const [selectedClass, setSelectedClass] = useState("Select Class");

  const data: ClassesProps[] = [
    { id: 0, class: "All" },
    { id: 1, class: "JSS 1" },
    { id: 2, class: "JSS 2" },
    { id: 3, class: "JSS 3" },
    { id: 4, class: "SSS 1" },
    { id: 5, class: "SSS 2" },
    { id: 6, class: "SSS 3" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:w-[100px] lg:w-[200px]">
        <Button variant="outline" className="flex">
          <div className="grow">{selectedClass}</div>
          <div className="flex border-l h-full items-center">
            <GraduationCap className="ml-2 h-5 w-5" />
            <ChevronDown className="ml-2 h-4 w-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-42">
        <DropdownMenuLabel>Class Room</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {data.map((c) => (
            <DropdownMenuItem
              key={c.id}
              onClick={() => setSelectedClass(c.class)}
            >
              <span>{c.class}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
