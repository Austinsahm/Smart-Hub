import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const studentSchema = z.object({
  id: z.string(),
  fullName: z.string(),
  status: z.string(),
  label: z.string(),
  classes: z.string(),
  gender: z.string(),
});

export type Student = z.infer<typeof studentSchema>;
