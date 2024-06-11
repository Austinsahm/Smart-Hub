import { redirect } from "next/navigation";
import { z } from "zod";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  gender: z.string().min(1),
  class: z.string().min(1),
  subject: z.array(z.string()),
  country: z.string().min(1),
  state: z.string().min(1),
  prevSchool: z.string().min(1),
  extraLesson: z.string().min(1),
  guardianName: z.string().min(1),
  guardianEmail: z.string().email(),
  guardianPhone: z.number().min(1),
  image: imageSchema,
});

export async function addProfile(prevState: unknown, formData: FormData) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  redirect("admin/school-mgt/student-mgt/58264123/studentProfile");
}

const editSchema = addSchema.extend({
  file: fileSchema.optional(),
  image: imageSchema.optional(),
});

export async function updateProfile(
  id: string,
  prevState: unknown,
  formData: FormData
) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  redirect("admin/school-mgt/student-mgt/58264123/studentProfile");
}
