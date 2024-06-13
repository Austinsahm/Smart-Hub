import { Button } from "@/components/ui/button";
import { FileUp, UserPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DataTable } from "./_components/data-table";
import { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { studentSchema } from "./_data/schema";
import { columns } from "./_components/columns";

export const metadata: Metadata = {
  title: "Student",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getStudent() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      "src/app/admin/school-mgt/student-mgt/_data/student.json"
    )
  );

  const student = JSON.parse(data.toString());

  return z.array(studentSchema).parse(student);
}

export default async function Page() {
  const student = await getStudent();
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 py-6 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Student</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all your student!
          </p>
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
      <DataTable data={student} columns={columns} />
    </div>
  );
}
