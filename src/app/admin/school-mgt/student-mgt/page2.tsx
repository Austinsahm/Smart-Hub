import { Button } from "@/components/ui/button";
import React from "react";
import { Search } from "../../_components/Search";
import { ChevronRight, FileUp, UserPlus } from "lucide-react";
import { ClassDropdown } from "../../_components/ClassDropdown";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileCard from "../../_components/ProfileCard";
import Link from "next/link";
import db from "@/db/db";

async function getStudentData() {
  const data = await db.student.findMany();

  // if (data == null) {
  //   return [];
  // } else {
  // }
  console.log(data);
  return data;
}

export default async function Page() {
  const data = [
    {
      id: 1,
      name: "John Martins",
      imagePath: "/avatars/01.png",
      role: "SSS 3",
      tag: "58264123",
    },
    {
      id: 2,
      name: "John Martins",
      imagePath: "/avatars/01.png",
      role: "SSS 3",
      tag: "58264123",
    },
    {
      id: 3,
      name: "John Martins",
      imagePath: "/avatars/01.png",
      role: "SSS 3",
      tag: "58264123",
    },
    {
      id: 4,
      name: "John Martins",
      imagePath: "/avatars/01.png",
      role: "SSS 3",
      tag: "58264123",
    },
    {
      id: 5,
      name: "John Martins",
      imagePath: "/avatars/01.png",
      role: "SSS 3",
      tag: "58264123",
    },
    {
      id: 6,
      name: "John Martins",
      imagePath: "/avatars/01.png",
      role: "SSS 3",
      tag: "58264123",
    },
    {
      id: 7,
      name: "John Martins",
      imagePath: "/avatars/01.png",
      role: "SSS 3",
      tag: "58264123",
    },
    {
      id: 8,
      name: "John Martins",
      imagePath: "/avatars/01.png",
      role: "SSS 3",
      tag: "58264123",
    },
  ];
  const studentData = await getStudentData();
  return (
    <div className="flex-1 space-y-4 py-6">
      <div className="flex items-center justify-between border rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Search /> <span>|</span>
          <ClassDropdown />
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline">
            Bulk upload
            <FileUp className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/school-mgt/student-mgt/new">
              Add Student
              <UserPlus className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* {data.map((c) => (
          <ProfileCard
            key={c.id}
            name={c.name}
            imagePath={c.imagePath}
            role={c.role}
            tag={c.tag}
          />
        ))} */}
        {studentData.map((student) => student.id)}
      </div>
    </div>
  );
}
