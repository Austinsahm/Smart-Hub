"use client";

import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import React from "react";
import { Input } from "@/components/ui/input";
import { addProfile, updateProfile } from "./StudentProfileAction";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Save } from "lucide-react";

type StudentList = string[];

type Student = {
  id: string;
  name: string;
  email: string;
  gender: string;
  class: string;
  subject: StudentList;
  country: string;
  state: string;
  prevSchool: string;
  extraLesson: string;
  guardianName: string;
  guardianEmail: string;
  guardianPhone: number;
  image: string;
};

export default function StudentProfileFrom({
  formAction,
  student,
}: {
  formAction: string;
  student?: Student | null;
}) {
  const [error, action] = useFormState(
    student == null ? addProfile : updateProfile.bind(null, student.id),
    {}
  );
  return (
    <>
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-md font-bold">
            {formAction} - Student Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <form action={action}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                {student != null && (
                  <Image
                    src={student.image}
                    height="224"
                    width="224"
                    alt="Product Image"
                  />
                )}
                <label htmlFor="image">Profile Picture</label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  required={student == null}
                />

                {error.image && (
                  <div className="text-destructive">{error.image}</div>
                )}
              </div>
              <div className="md:col-span-3 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      defaultValue={student?.name || ""}
                    />
                    {error.name && (
                      <div className="text-destructive">{error.name}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      defaultValue={student?.email || ""}
                    />
                    {error.email && (
                      <div className="text-destructive">{error.email}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="gender">Gender</label>
                    <Input
                      type="text"
                      id="gender"
                      name="gender"
                      required
                      defaultValue={student?.gender || ""}
                    />
                    {error.gender && (
                      <div className="text-destructive">{error.gender}</div>
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-3">
                    <label htmlFor="subject">Subjects</label>
                    <Textarea
                      id="subject"
                      name="subject"
                      required
                      defaultValue={student?.subject || ""}
                    />
                    {error.subject && (
                      <div className="text-destructive">{error.subject}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="class">Class</label>
                    <Input
                      type="text"
                      id="class"
                      name="class"
                      required
                      defaultValue={student?.class || ""}
                    />
                    {error.class && (
                      <div className="text-destructive">{error.class}</div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="country">Country</label>
                    <Input
                      type="text"
                      id="country"
                      name="country"
                      required
                      defaultValue={student?.country || ""}
                    />
                    {error.country && (
                      <div className="text-destructive">{error.country}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="state">State</label>
                    <Input
                      type="text"
                      id="state"
                      name="state"
                      required
                      defaultValue={student?.state || ""}
                    />
                    {error.state && (
                      <div className="text-destructive">{error.state}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="prevSchool">Previous School</label>
                    <Input
                      type="text"
                      id="prevSchool"
                      name="prevSchool"
                      required
                      defaultValue={student?.prevSchool || ""}
                    />
                    {error.prevSchool && (
                      <div className="text-destructive">{error.prevSchool}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="extraLesson">Extra Lesson</label>
                    <Input
                      type="text"
                      id="extraLesson"
                      name="extraLesson"
                      required
                      defaultValue={student?.extraLesson || ""}
                    />
                    {error.extraLesson && (
                      <div className="text-destructive">
                        {error.extraLesson}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guardianName">Guardian Name</label>
                    <Input
                      type="text"
                      id="guardianName"
                      name="guardianName"
                      required
                      defaultValue={student?.guardianName || ""}
                    />
                    {error.guardianName && (
                      <div className="text-destructive">
                        {error.guardianName}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guardianEmail">Guardian Email</label>
                    <Input
                      type="text"
                      id="guardianEmail"
                      name="guardianEmail"
                      required
                      defaultValue={student?.guardianEmail || ""}
                    />
                    {error.guardianEmail && (
                      <div className="text-destructive">
                        {error.guardianEmail}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guardianPhone">Guardian Phone Number</label>
                    <Input
                      type="text"
                      id="guardianPhone"
                      name="guardianPhone"
                      required
                      defaultValue={student?.guardianPhone || ""}
                    />
                    {error.guardianPhone && (
                      <div className="text-destructive">
                        {error.guardianPhone}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full pt-2">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
