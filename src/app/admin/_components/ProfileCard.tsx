import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type ProfileCardProps = {
  imagePath: string;
  name: string;
  role: string;
  tag: string;
};

export default function ProfileCard({
  name,
  imagePath,
  role,
  tag,
}: ProfileCardProps) {
  return (
    <>
      <Link href={`/admin/school-mgt/student-mgt/${tag}/studentProfile`}>
        <Card className="flex items-center p-4 hover:shadow-lg">
          <div className="flex items-center w-full">
            <Avatar className="h-16 w-16">
              <AvatarImage src={imagePath} alt="Profile Image" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="flex-grow ml-4">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-bold">{name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-sm font-medium">{role}</div>
                <p className="text-sm text-muted font-medium">{tag}</p>
              </CardContent>
            </div>
            <div className="ml-auto">
              <ChevronRight />
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
}
