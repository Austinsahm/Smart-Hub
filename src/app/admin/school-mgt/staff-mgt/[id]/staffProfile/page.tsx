"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StudentProfile() {
  const subjectList = [
    "Mathematics",
    "English Language",
    "Yoruba",
    "Basic Science",
    "Social Studies",
    "Fine Arts/Creative Art",
    "Agricultural Science",
    "Civic Education",
    "Christian Religion Studies",
    "Physical and Health Education",
    "Business Studies",
    "French",
    "Computer Studies",
    "Home Economics",
    "Music",
    "Basic Technology",
  ];
  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-md font-bold">Student Profile</CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="">
              <div className="flex w-full justify-center ">
                <div className="rounded-full h-56 w-56 aspect-video">
                  <Image
                    src="/profileImage.png"
                    width="224"
                    height="224"
                    alt="Profile Image"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex justify-center font-semibold mt-4">
                Davis John Felix
              </div>
            </div>
            <div className="md:col-span-3 mb-4">
              <div className="grid md:grid-cols-3 grid-cols-1  gap-4">
                <div className="grid space-y-1">
                  <span className="text-slate-200">Email</span>
                  <span className="">info@yourmail.com</span>
                </div>
                <div className="grid space-y-1">
                  <span className="text-slate-200">Gender</span>
                  <span>Male</span>
                </div>
                <div className="grid space-y-1">
                  <span className="text-slate-200">Class</span>
                  <span>JSS 3</span>
                </div>
                <div className="grid space-y-1 md:col-span-3">
                  <span className="text-slate-200">Subject</span>

                  <ol className="grid grid-cols-1 md:grid-cols-3" type="1">
                    {subjectList.map((c, index) => (
                      <li key={index} className="flex">
                        <div className="mr-2 text-sm font-medium text-slate-500">
                          {index + 1}
                        </div>
                        <div className="text-sm font-normal">{c}</div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="grid space-y-1">
                  <span className="text-slate-200">Country</span>
                  <span>United States</span>
                </div>
                <div className="grid space-y-1">
                  <span className="text-slate-200">State</span>
                  <span>United States</span>
                </div>
                <div className="grid space-y-1">
                  <span className="text-slate-200">School Bus</span>
                  <span>No</span>
                </div>
                <div className="grid space-y-1">
                  <span className="text-slate-200">Extra Lesson</span>
                  <span>Yes</span>
                </div>
              </div>
              <div className="flex justify-center items-center my-4">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="h-full flex items-center">
                    <Separator />
                  </div>
                  <div> Parent/Guardian</div>
                  <div className="h-full flex items-center">
                    <Separator />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1  gap-4 my-4">
                <div className="grid space-y-1">
                  <span className="text-slate-200">Full Name</span>
                  <span className="text-wrap">Bash Jack</span>
                </div>
                <div className="grid space-y-1">
                  <span className="text-slate-200">Phone number</span>
                  <span className="text-wrap">08012345678</span>
                </div>
                <div className="grid space-y-1">
                  <span className="text-slate-200">Email</span>
                  <span className="text-wrap">info@yourmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full border-t">
          <div className="flex justify-end w-full pt-2">
            <Button asChild>
              <Link
                href={`/admin/school-mgt/student-mgt/58264123/studentProfile/edit`}
              >
                <Pencil className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
